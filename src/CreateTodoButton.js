import "./CreateTodoButton.css";
function CreateTodoButton() {
  return (
    <button
      className="createTodoButton"
      onClick={(event) => {
        console.log("Me diste click");
        console.log(event);
        console.log(event.target);
      }}
    >
      +
    </button>
  );
}
export { CreateTodoButton };
