import cx from 'classnames';

const Button = ({
  children,
  className,
  disabled,
  ...props
}: {
  children: React.ReactNode,
  className?: string,
  [key: string]: unknown,
}) => (
  <button
    className={cx(
      'font-bold py-2 px-4 rounded',
      {
        'bg-blue-500 hover:bg-blue-700 text-white': !disabled,
        'bg-gray-800 hover:bg-gray-800 text-gray-500 cursor-not-allowed': disabled,
      },
      className,
    )}
    {...props}
  >
    {children}
  </button>
);

export default Button;
