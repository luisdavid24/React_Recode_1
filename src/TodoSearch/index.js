import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      placeholder="Escribe aqui"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };

// let veces = 0;
// function Explicacion() {
//   return (
//     <>
//       <p>Diste el siguiente numero de cicls{veces}</p>
//       <button onClick={() => veces++}>Click</button>
//     </>
//   );
// }

// function ExplicacionMejorada() {
//   let [state, setState] = React.useState(0);
//   return (
//     <>
//       <p>Diste el siguiente numero de cicls{state}</p>
//       <button onClick={() => setState(state++)}>Click</button>
//     </>
//   );
// }
