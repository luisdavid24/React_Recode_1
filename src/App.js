import logo from "./logo.svg";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        <TodoList />
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

function TodoList() {
  return <h2>Prueba</h2>;
}

export default App;
