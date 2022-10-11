import { PropsWithChildren } from "react";

export const Heading1: React.FC<PropsWithChildren> = ({ children }) => {
  return <h1 className="heading-1">{children}</h1>;
};
