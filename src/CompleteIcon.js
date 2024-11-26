import React from "react";
import { FaCheck } from "react-icons/fa";

function CompleteIcon({ completed, onCompleted }) {
  return (
    <FaCheck
      className={`Icon Icon-check ${completed && "Icon-check--active"}`}
      onClick={onCompleted}
    />
  );
}
export { CompleteIcon };
