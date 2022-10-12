import { PropsWithChildren } from "react";

export const PageSubtitle: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <p className="page-subtitle" role="doc-subtitle">
      {children}
    </p>
  );
};
