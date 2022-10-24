import { PropsWithChildren } from 'react';

export const CardList: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 list-none -mx-2">{children}</ul>
  );
};
