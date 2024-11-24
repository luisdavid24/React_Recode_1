import logo from "./logo.svg";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";

const defaultTodos = [
  { text: "Actividad1 ", completed: true },
  { text: "Actividad2 ", completed: false },
  { text: "Actividad3 ", completed: true },
  { text: "Actividad4 ", completed: false },
  { text: "manzana ", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  console.log("Mira los cambios de searchValue: " + searchValue);

  const totalTodos = todos.length;
  // Aqui se agrego la funcion buscar en la barra
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });
  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
