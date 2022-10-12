import { PropsWithChildren } from "react";

export const Heading4: React.FC<PropsWithChildren> = ({ children }) => {
  return <h4 className="heading-4">{children}</h4>;
};
