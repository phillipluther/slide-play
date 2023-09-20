import cx from 'classnames';

const classNames = [
  'mb-8',
  'text-6xl',
];

export default function PageTitle({
  className,
  children,
  ...props
}: {
  className?: string,
  children: React.ReactNode,
}) {
  return (
    <h1 className={cx([...classNames], className)}>{children}</h1>
  );
}
