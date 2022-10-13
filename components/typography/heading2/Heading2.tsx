import { HTMLAttributes } from "react";
import slugify from "slugify";

export const Heading2: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  ...props
}) => {
  if (!props.id && typeof children === "string") {
    props.id = slugify(children, { lower: true });
  }
  return (
    <h2 className="heading-2" {...props}>
      {children}
    </h2>
  );
};
