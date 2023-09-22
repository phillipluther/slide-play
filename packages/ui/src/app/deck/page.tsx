'use client';

import { useRef, useEffect, useState } from 'react';
import PageTitle from '@/components/page-title';
import FakeDeck, { deckSize } from '@/components/fake-deck';
import Controls from '@/components/controls';
import { SOCKET_SERVER } from '@/consts';

export default function DeckPage() {
  const [currentSlide, updateCurrentSlide] = useState(0);
  const [isConnected, connect] = useState(false);

  let socket: WebSocket;

  function updateSlideNum(slideNum: number) {
    updateCurrentSlide(slideNum);
    socket.send(slideNum.toString());
  }

  useEffect(() => {
    socket = new WebSocket(SOCKET_SERVER);

    socket.onopen = () => {
      connect(true);
    };
  });

  return (
    <>
      <PageTitle>What the Presenter Sees</PageTitle>
      
      <div className="lg:flex flex-wrap">
        <div className="lg:w-9/12">
          <FakeDeck slide={currentSlide} />
          <Controls 
            disablePrevious={(currentSlide === 0) || !isConnected}
            disableNext={(currentSlide === deckSize) || !isConnected}
            onPrevious={() => updateSlideNum(currentSlide - 1)}
            onNext={() => updateSlideNum(currentSlide + 1)}
          />
        </div>

        <div className="lg:w-3/12 lg:p-8">
          <p>Speaker notes for slide {currentSlide}</p>
        </div>

        <p className="text-sm mt-4 italic">
          Status: { isConnected ? 'Connected' : 'Disconnected' }
        </p>
      </div>
    </>
  );
}
