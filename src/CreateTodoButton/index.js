import "./CreateTodoButton.css";
function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className="createTodoButton"
      onClick={() => setOpenModal((state) => !state)}
    >
      +
    </button>
  );
}
export { CreateTodoButton };
