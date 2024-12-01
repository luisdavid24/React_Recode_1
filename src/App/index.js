import { AppUI } from "./AppUI";
import { useLocalStorage } from "./useLocalStorage";
import React from "react";

// const defaultTodos = [
//   { text: "Actividad1 ", completed: true },
//   { text: "Actividad2 ", completed: false },
//   { text: "Actividad3 ", completed: true },
//   { text: "Actividad4 ", completed: false },
//   { text: "manzana ", completed: false },
// ];
// localStorage.setItem("TODOS", JSON.stringify(defaultTodos));
// localStorage.removeItem("TODOS");

//Estos es un Custom Hook para hacer mas legible el codigo

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  //console.log("Mira los cambios de searchValue: " + searchValue);

  const totalTodos = todos.length;

  // Aqui se agrego la funcion buscar en la barra
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      error={error}
      loading={loading}
    />
  );
}

export default App;
