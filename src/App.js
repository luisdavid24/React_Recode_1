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
  { text: "Actividad3 ", completed: false },
  { text: "Actividad4 ", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo) => (
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
