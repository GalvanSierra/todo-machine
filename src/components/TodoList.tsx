import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function TodoList({ children }: Props) {
  return <ul className="todo__list">{children}</ul>;
}
