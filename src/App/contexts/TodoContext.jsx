import { createContext, useState } from "react";
import { useLocaStorage } from "../../hooks/useLocaStorage";

const defaultTodos = [
  { text: "Comprar pan", completed: true },
  { text: "Tomar el Curso de Intro a React.js", completed: false },
  { text: "Llorar", completed: false },
  { text: "Cosas de la vida", completed: false },
];

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    error,
    loading,
  } = useLocaStorage("TODOS", defaultTodos);

  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.text === text);

    newTodos[index].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.text === text);

    if (index > -1) newTodos.splice(index, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({ text, completed: false });
    saveTodos(newTodos);
  };
  const [openModal, setOpenModal] = useState(false);

  return (
    <TodoContext.Provider
      value={{
        addTodo,
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
