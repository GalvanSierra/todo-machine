import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export function TodoForm() {
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="">Escribe tu nueva tarea</label>
      <textarea
        name=""
        id=""
        placeholder="hola"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
      <button>Agregar tarea</button>
      <button onClick={onCancel}>Cancelar</button>
    </form>
  );
}
