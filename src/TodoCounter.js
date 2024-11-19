function TodoCounter({ total, completed }) {
  return (
    <h1
      style={{
        fontSize: "24px",
      }}
    >
      Has completado {completed} de {total} TODOS
    </h1>
  );
}

export { TodoCounter };
