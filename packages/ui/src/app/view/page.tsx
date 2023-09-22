'use client';

import { useState, useEffect } from 'react';
import PageTitle from '../../components/page-title';
import FakeDeck from '../../components/fake-deck';
import { SOCKET_SERVER } from '../../consts';

export default function ViewPage() {
  const [slideNum, updateSlideNum] = useState(0);

  useEffect(() => {
    const socket = new WebSocket(SOCKET_SERVER);

    socket.onopen = () => {
      console.log('Connected!');
    };

    socket.onmessage = (event) => {
      console.log(`Server says, "${event.data}"`);
      updateSlideNum(parseInt(event.data));
    };
  });

  return (
    <>
      <PageTitle>What a Viewer Sees</PageTitle>
      <FakeDeck jumpTo={slideNum} />
    </>
  );
}
