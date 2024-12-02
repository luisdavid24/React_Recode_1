import React from "react";
function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return { item, saveItem, loading, error };
}
export { useLocalStorage };

// const defaultTodos = [
//   { text: "Actividad1 ", completed: true },
//   { text: "Actividad2 ", completed: false },
//   { text: "Actividad3 ", completed: true },
//   { text: "Actividad4 ", completed: false },
//   { text: "manzana ", completed: false },
// ];
// localStorage.setItem("TODOS", JSON.stringify(defaultTodos));
// localStorage.removeItem("TODOS");
