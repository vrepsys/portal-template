import React, { OlHTMLAttributes, LiHTMLAttributes, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  type?: 'ordered' | 'unordered';
}

const UnorderedList: React.FC<PropsWithChildren & LiHTMLAttributes<HTMLOListElement>> = ({
  children,
  ...props
}) => <ul {...props}>{children}</ul>;
const OrderedList: React.FC<PropsWithChildren & OlHTMLAttributes<HTMLOListElement>> = ({
  children,
  ...props
}) => <ol {...props}>{children}</ol>;

export const List: React.FC<Props> = ({ type = 'unordered', children }) => {
  const ListComponent = type === 'unordered' ? UnorderedList : OrderedList;
  return <ListComponent className="list">{children}</ListComponent>;
};
