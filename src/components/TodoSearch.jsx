import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  return (
    <input
      className="todo__search"
      type="text"
      placeholder="buscar..."
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}
