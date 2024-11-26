import React from "react";
import { TiDelete } from "react-icons/ti";

function DeleteIcon({ onDeleted }) {
  return <TiDelete className="Icon Icon-delete" onClick={onDeleted} />;
}
export { DeleteIcon };
