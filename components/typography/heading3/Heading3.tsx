import { HTMLAttributes } from "react";
import slugify from "slugify";

export const Heading3: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  ...props
}) => {
  if (!props.id && typeof children === "string") {
    props.id = slugify(children, { lower: true });
  }
  return (
    <h3 className="heading-3" {...props}>
      {children}
    </h3>
  );
};
