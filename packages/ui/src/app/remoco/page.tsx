import cx from 'classnames';

const Button = ({ children, className, ...props }: { children: React.ReactNode, className?: string }) => (
  <button
    className={cx(
      'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
      className,
    )}
    {...props}
  >
    {children}
  </button>
);

export default function RemocoPage() {
  return (
    <main className="max-w-lg p-8 mx-auto">
      <h1 className="text-2xl">Simple Remote Control</h1>
      <p>Try it on your phone!</p>
      
      <div className="flex w-100 mt-8">
        <Button className="mr-2">&laquo; Previous Slide</Button>
        <Button className="ml-2">Next Slide &raquo;</Button>
      </div>
    </main>
  );
}
