'use client';

import FakeSlide from './fake-slide';

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

export const deckSize = slideColors.length;

export default function FakeDeck({
  slide = 0,
}: {
  slide?: number,
}) {
  return (
    <div className="h-96">
      <FakeSlide slideId={slide} bg={slideColors[slide]} />
    </div>
  )
}
