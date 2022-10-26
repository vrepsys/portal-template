import { PropsWithChildren, ReactElement, ReactNode } from 'react';

interface Props extends PropsWithChildren {
  cite?: string;
  caption?: ReactElement | string;
}

export const Blockquote: React.FC<Props> = ({ cite, caption, children }) => {
  return (
    <figure className='my-3'>
      <blockquote cite={cite} className="border-l-2 pl-4 border-color-tertiary">
        {typeof children === 'string' ? <p className="text-medium">{children}</p> : children}
      </blockquote>
      {caption && <figcaption className="text-small text-color-secondary">{caption}</figcaption>}
    </figure>
  );
};
