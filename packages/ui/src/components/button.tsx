import cx from 'classnames';

const Button = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode,
  className?: string,
  [key: string]: unknown,
}) => (
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

export default Button;
