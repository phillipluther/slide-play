'use client';

import { useState } from 'react';
import FakeSlide from './fake-slide';
import Button from './button';

const slideColors = [
  'gray',
  'white',
  'red',
  'orange',
  'yellow',
  'lime',
  'green',
  'teal',
  'cyan',
  'blue',
  'purple',
];

export default function FakeDeck({ showControls = false }) {
  const [slideNum, goToSlide] = useState(0);

  return (
    <div className="h-96">
      <FakeSlide slideId={slideNum} bg={slideColors[slideNum]} />

      {showControls && (slideNum > 0) && (
        <Button onClick={() => goToSlide(slideNum - 1)}>Previous Slide</Button>
      )}

      {showControls && (slideNum < 12) && (
        <Button onClick={() => goToSlide(slideNum + 1)}>Next Slide</Button>
      )}
    </div>
  )
}
