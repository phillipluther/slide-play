import cx from 'classnames';
import PageTitle from '../../components/page-title';
import Wrapper from '../../components/wrapper';

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
    <Wrapper as="main">
      <PageTitle>Simple Remote Control</PageTitle>
      <p>Try it on your phone!</p>
      
      <div className="flex w-100 mt-8">
        <Button className="mr-2">&laquo; Previous Slide</Button>
        <Button className="ml-2">Next Slide &raquo;</Button>
      </div>
    </Wrapper>
  );
}
