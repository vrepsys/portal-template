import { HTMLAttributes } from 'react';

export const Heading5: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => {
  return (
    <h6 className="heading-6" {...props}>
      {children}
    </h6>
  );
};
