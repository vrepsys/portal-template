import Link from 'next/link';
import { PropsWithChildren } from 'react';
import classNames from '../utils/classnames';

interface ButtonProps extends PropsWithChildren {
  to: string;
  selected?: boolean;
  style: 'default' | 'secondary' | 'search';
  className: string;
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
