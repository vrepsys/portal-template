import { HTMLAttributes } from "react";
import slugify from "slugify";

export const PageTitle: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  ...props
}) => {
  if (!props.id && typeof children === "string") {
    props.id = slugify(children, { lower: true });
  }
  return (
    <h1 className="page-title" {...props}>
      {children}
    </h1>
  );
};
