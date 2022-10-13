import { HTMLAttributes } from "react";

export const Heading4: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  ...props
}) => {
  return (
    <h4 className="heading-4" {...props}>
      {children}
    </h4>
  );
};
