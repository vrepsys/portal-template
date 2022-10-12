import { PropsWithChildren } from "react";

export const Heading5: React.FC<PropsWithChildren> = ({ children }) => {
  return <h5 className="heading-5">{children}</h5>;
};
