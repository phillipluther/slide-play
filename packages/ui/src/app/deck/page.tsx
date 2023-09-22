'use client';

import { useEffect, useCallback, useState } from 'react';
import PageTitle from '@/components/page-title';
import FakeDeck, { deckSize } from '@/components/fake-deck';
import Controls from '@/components/controls';
import { useSocket } from '@/components/socket-provider';

export default function DeckPage() {
  const [currentSlide, updateCurrentSlide] = useState(0);
  const [isConnected, connect] = useState(false);
  
  const socket = useSocket();

  const onOpen = useCallback(() => {
    connect(true);
  }, []);

  function updateSlideNum(slideNum: number) {
    updateCurrentSlide(slideNum);
    socket.send(slideNum.toString());
  }

  useEffect(() => {
    socket.addEventListener('open', onOpen);
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
