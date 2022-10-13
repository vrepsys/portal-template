import { PropsWithChildren } from "react";

import { HTMLAttributes } from "react";

export const Heading5: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  ...props
}) => {
  return (
    <h5 className="heading-5" {...props}>
      {children}
    </h5>
  );
};
