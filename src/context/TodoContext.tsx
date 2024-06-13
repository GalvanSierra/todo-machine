import { createContext, ReactNode, useState } from "react";
import { UseLocalStorageResult, useLocaStorage } from "../hooks/useLocaStorage";

type Props = {
  children: ReactNode;
};

export const TodoContext = createContext<TodoContextValue>(
  {} as TodoContextValue
);

export function TodoProvider({ children }: Props) {
  const {
    item: todos,
    saveItem: saveTodos,
    error,
    loading,
  }: UseLocalStorageResult<Todo[]> = useLocaStorage("TODOS", [] as Todo[]);

  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo: Todo) => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo: Todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const completeTodo = (text: string) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo: Todo) => todo.text === text);

    newTodos[index].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text: string) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo: Todo) => todo.text === text);

    if (index > -1) newTodos.splice(index, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text: string) => {
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
