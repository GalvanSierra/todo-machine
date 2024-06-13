import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <h2 className="todo__title">
      {completedTodos === totalTodos && totalTodos != 0
        ? "Haz completado todas las tareas"
        : `Has completado ${completedTodos} de ${totalTodos}`}
    </h2>
  );
}
