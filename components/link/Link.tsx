import NextLink from 'next/link';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  url: string;
}

export const Link: React.FC<Props> = ({ url, children }) => {
  return (
    <NextLink href={url} passHref>
      <a className="link">{children}</a>
    </NextLink>
  );
};
