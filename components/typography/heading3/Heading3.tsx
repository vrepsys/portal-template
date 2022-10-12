import { PropsWithChildren } from "react";

export const Heading3: React.FC<PropsWithChildren> = ({ children }) => {
  return <h3 className="heading-3">{children}</h3>;
};
