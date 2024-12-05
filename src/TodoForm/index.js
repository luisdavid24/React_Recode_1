import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    addTodo(newTodoValue);
    event.preventDefault();
    setOpenModal(false);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Digita la nueva tarea</label>
      <textarea
        placeholder="Digita en mi"
        onChange={onChange}
        value={newTodoValue}
      />
      <div className="TodoBtnContainer">
        <button
          className="TodoFormBtnCancelar"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="TodoFormBtnAgregar">Añadir</button>
      </div>
    </form>
  );
}
export { TodoForm };
