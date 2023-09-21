'use client';

import { useState } from 'react';
import PageTitle from '../../components/page-title';
import FakeDeck from '../../components/fake-deck';

export default function DeckPage() {
  const [currentSlide, updateSlideNum] = useState(0);

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
