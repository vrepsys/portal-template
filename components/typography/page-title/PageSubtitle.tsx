import { PropsWithChildren } from "react";

export const PageTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return <h1 className="page-title">{children}</h1>;
};
