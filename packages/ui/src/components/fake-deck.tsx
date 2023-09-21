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

export default function FakeDeck({
  showControls = false,
  onChange,
}: {
  showControls?: boolean,
  onChange?: Function,
}) {
  const [slideNum, goToSlide] = useState(0);
  const changeSlides = (nextSlide: number) => {
    goToSlide(nextSlide);

    if (onChange) {
      onChange(nextSlide);
    }
  }

  return (
    <div className="h-96">
      <FakeSlide slideId={slideNum} bg={slideColors[slideNum]} />

      {showControls && (slideNum > 0) && (
        <Button className="mr-4 mt-4" onClick={() => changeSlides(slideNum - 1)}>Previous Slide</Button>
      )}

      {showControls && (slideNum < 12) && (
        <Button className="mt-4" onClick={() => changeSlides(slideNum + 1)}>Next Slide</Button>
      )}
    </div>
  )
}
