export function TodoItem({ text, completed, onCompleted, onDelete }) {
  return (
    <li className={!completed ? "active" : "completed"}>
      <span onClick={onCompleted}>✔</span>
      <p>{text}</p>
      <span onClick={onDelete}>❌</span>
    </li>
  );
}
