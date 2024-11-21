import React from "react";
import "./TodoSearch.css";

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <input
      placeholder="Escribe aqui"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        console.log("Escribiste en mi el TodoSearch");
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
