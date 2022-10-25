import { TableHTMLAttributes } from 'react';

export const Table: React.FC<TableHTMLAttributes<HTMLTableElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <table className={`${className ? className : ''} table`} {...props}>
      {children}
    </table>
  );
};
