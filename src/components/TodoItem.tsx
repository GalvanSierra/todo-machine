import { MouseEventHandler } from "react";

interface TodoItemProps extends Todo {
  onComplete: MouseEventHandler<HTMLSpanElement>;
  onDelete: MouseEventHandler<HTMLSpanElement>;
}

export function TodoItem({
  text,
  completed,
  onComplete,
  onDelete,
}: TodoItemProps) {
  return (
    <li className={`todo__item ${!completed ? "" : "todo__item--completed"}`}>
      <span className="todo__icon-complete" onClick={onComplete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-square-rounded"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
        </svg>
      </span>
      <p className="todo__text">{text}</p>
      <span className="todo__icon-delete" onClick={onDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-trash"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 7h16" />
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          <path d="M10 12l4 4m0 -4l-4 4" />
        </svg>
      </span>
    </li>
  );
}
