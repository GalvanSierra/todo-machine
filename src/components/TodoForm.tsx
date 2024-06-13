import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export function TodoForm() {
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const [value, setValue] = useState<string>("");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    addTodo(value);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="form__label" htmlFor="input">
        Escribe tu nueva tarea
      </label>
      <textarea
        className="form__input"
        name="input"
        id="input"
        placeholder="nueva tarea"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
      <div className="form__buttons">
        <button className="form__button form__button--add">Agregar</button>
        <button
          className="form__button form__button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
