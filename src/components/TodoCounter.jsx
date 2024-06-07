import { useContext } from "react";
import { TodoContext } from "../App/contexts/TodoContext";

export function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <h2>
      {completedTodos === totalTodos
        ? "Haz completado todas las tareas"
        : `Has completado ${completedTodos} de ${totalTodos}`}
    </h2>
  );
}
