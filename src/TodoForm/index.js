import React from "react";
import "./TodoForm.css";

function TodoForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label>Digita la nueva tarea</label>
      <textarea placeholder="Digita en mi" />
      <div className="TodoBtnContainer">
        <button className="TodoFormBtnCancelar">Cancelar</button>
        <button className="TodoFormBtnAgregar">Añadir</button>
      </div>
    </form>
  );
}
export { TodoForm };
