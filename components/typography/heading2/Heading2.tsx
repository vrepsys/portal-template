import { PropsWithChildren } from "react";

export const Heading2: React.FC<PropsWithChildren> = ({ children }) => {
  return <h2 className="heading-2">{children}</h2>;
};
