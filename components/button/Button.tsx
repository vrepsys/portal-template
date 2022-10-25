import Link from 'next/link';
import { PropsWithChildren, ReactNode } from 'react';
import classNames from '../utils/classnames';

interface ButtonProps extends PropsWithChildren {
  to: string;
  selected?: boolean;
  style?: 'default' | 'secondary' | 'search';
  className?: string;
  icon?: React.FC;
}

export const Button: React.FC<ButtonProps> = ({
  to,
  children,
  selected = false,
  className = '',
  style = 'default',
  icon: Icon,
}) => {
  return (
    <Link href={to} passHref>
      <a
        className={classNames(
          selected ? 'selected' : '',
          style !== 'default' ? style : '',
          'button',
          className
        )}
      >
        {Icon && <Icon />}
        {children}
      </a>
    </Link>
  );
};
