'use client';

import { useState, useCallback, useEffect } from 'react';
import PageTitle from '@/components/page-title';
import FakeDeck from '@/components/fake-deck';
import { useSocket } from '@/components/socket-provider';

export default function ViewPage() {
  const [slideNum, updateSlideNum] = useState(0);
  const [isConnected, connect] = useState(false);

  const socket = useSocket();

  const onOpen = useCallback(() => {
    connect(true);
  }, []);

  const onMessage = useCallback((e: { data: string}) => {
    updateSlideNum(parseInt(e.data));
  }, []);

  useEffect(() => {
    socket.addEventListener('open', onOpen);
    socket.addEventListener('message', onMessage);
  }, [socket]);

  return (
    <>
      <PageTitle>What a Viewer Sees</PageTitle>
      <FakeDeck slide={slideNum} />
      <p className="text-sm mt-4 italic">
        Status: { isConnected ? 'Connected' : 'Disconnected' }
      </p>
    </>
  );
}
