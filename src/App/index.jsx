import { AppIU } from "./AppIU";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  return (
    <TodoProvider>
      <AppIU />
    </TodoProvider>
  );
}

export default App;
