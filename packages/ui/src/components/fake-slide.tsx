import cx from 'classnames';

const colors = [
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

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

export default function FakeSlide({ slideId }: { slideId: number}) {
  const randomBgColor = getRandomColor();

  return (
    <div
      className="w-full h-full flex justify-center items-center flex-col"
      style={{ background: randomBgColor }}
    >
      <p className="text-2xl text-white font-bold p-4 bg-black">Slide {slideId}</p>
      <p className="text-white font-bold p-4 bg-black">Randomly {randomBgColor}</p>
    </div>
  );
}
