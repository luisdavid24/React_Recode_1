import logo from "./logo.svg";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import "./App.css";

const defaultTodos = [
  { text: "Actividad1 ", completed: true },
  { text: "Actividad2 ", completed: false },
  { text: "Actividad3 ", completed: false },
  { text: "Actividad4 ", completed: false },
];

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        <TodoItem />
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
