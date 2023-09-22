'use client';

import { useEffect, useState } from 'react';
import PageTitle from '@/components/page-title';
import FakeDeck from '@/components/fake-deck';
import { SOCKET_SERVER } from '@/consts';

export default function DeckPage() {
  const [currentSlide, updateCurrentSlide] = useState(0);
  let socket: WebSocket;

  function updateSlideNum(slideNum: number) {
    updateCurrentSlide(slideNum);
    socket.send(slideNum.toString());
  }

  useEffect(() => {
    socket = new WebSocket(SOCKET_SERVER);
  });

  return (
    <>
      <PageTitle>What the Presenter Sees</PageTitle>
      
      <div className="lg:flex">
        <div className="lg:w-9/12">
          <FakeDeck showControls onChange={updateSlideNum} />
        </div>

        <div className="lg:w-3/12 lg:p-8">
          <p>Speaker notes for slide {currentSlide}</p>
        </div>
      </div>
    </>
  );
}
