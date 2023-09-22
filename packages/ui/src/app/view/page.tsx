'use client';

import { useState, useEffect } from 'react';
import PageTitle from '@/components/page-title';
import FakeDeck from '@/components/fake-deck';

import { SOCKET_SERVER } from '@/consts';

export default function ViewPage() {
  const [slideNum, updateSlideNum] = useState(0);
  const [isConnected, connect] = useState(false);

  useEffect(() => {
    const socket = new WebSocket(SOCKET_SERVER);

    socket.onopen = () => {
      connect(true);
    };

    socket.onmessage = (event) => {
      updateSlideNum(parseInt(event.data));
    };
  });

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
