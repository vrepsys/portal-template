import NextLink from 'next/link';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';

export const Link: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  href,
  children,
  ...props
}) => {
  return (
    <NextLink href={href || '#'} passHref>
      <a className="link" {...props}>
        {children}
      </a>
    </NextLink>
  );
};
