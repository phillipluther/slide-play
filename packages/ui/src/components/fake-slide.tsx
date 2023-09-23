export default function FakeSlide({ slideId, bg = 'black' }: { slideId: number, bg: string }) {
  return (
    <div
      className="w-full h-full flex justify-center items-center flex-col"
      style={{ background: bg }}
    >
      <p className="text-2xl text-white font-bold p-4 bg-black">Slide {slideId}</p>
      <p className="text-white font-bold p-4 bg-black">It is {bg}.</p>
    </div>
  );
}
