interface Todo {
  text: string;
  completed: boolean;
}

interface TodoContextValue {
  addTodo: (text: string) => void;
  loading: boolean;
  error: string | null;
  completedTodos: number;
  totalTodos: number;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchedTodos: Todo[];
  completeTodo: (text: string) => void;
  deleteTodo: (text: string) => void;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
