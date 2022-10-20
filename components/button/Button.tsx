import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
  to: string;
  selected?: boolean;
  style: 'default' | 'secondary' | 'search';
  className: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const Button: React.FC<ButtonProps> = ({
  to,
  children,
  selected = false,
  className,
  style = 'default',
}) => {
  return (
    <Link href={to} passHref>
      <a
        className={classNames(
          selected ? 'selected' : '',
          style !== 'default' ? style : '',
          'block button',
          className
        )}
      >
        {children}
      </a>
    </Link>
  );
};
