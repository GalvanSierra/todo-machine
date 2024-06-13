import { TodoProvider } from "../context/TodoContext";
import { AppIU } from "./AppIU";

function App() {
  return (
    <TodoProvider>
      <AppIU />
    </TodoProvider>
  );
}

export default App;
