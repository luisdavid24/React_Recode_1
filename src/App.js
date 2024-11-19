import logo from "./logo.svg";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        <TodoItem />
      </TodoList>
      {/* <CreateTodoButton /> */}
    </div>
  );
}

function TodoItem() {
  return <h2>Prueba</h2>;
}

export default App;
