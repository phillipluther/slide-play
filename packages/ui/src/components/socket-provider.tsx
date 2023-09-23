'use client';

import { useContext, createContext } from 'react';

export const SOCKET_SERVER = process.env.SOCKET_SERVER || 'ws://localhost:8001';

const ws = new WebSocket(SOCKET_SERVER);

export const SocketContext = createContext(ws);

export function useSocket() {
  const socket = useContext(SocketContext);
  return socket;
}

export default function SocketProvider({ children }: { children: React.ReactNode }) {
  return (
    <SocketContext.Provider value={ws}>{children}</SocketContext.Provider>
  );
}
