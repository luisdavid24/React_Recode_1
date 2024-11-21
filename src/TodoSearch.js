import "./TodoSearch.css";
function TodoSearch() {
  return (
    <input
      placeholder="Escribe aqui"
      className="TodoSearch"
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
