export function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className={!completed ? "active" : "completed"}>
      <span onClick={onComplete}>✔</span>
      <p>{text}</p>
      <span onClick={onDelete}>❌</span>
    </li>
  );
}
