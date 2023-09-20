import cx from 'classnames';

const classNames = [
  'py-12 px-8',
  'max-w-6xl',
  'mx-auto',
];

export default function Wrapper({
  as: Tag = 'section',
  className,
  children,
  ...props
}: {
  as?: keyof JSX.IntrinsicElements,
  className?: string,
  children: React.ReactNode,
}) {
  return (
    <Tag className={cx([...classNames], className)} {...props}>
      {children}
    </Tag>
  );
}
