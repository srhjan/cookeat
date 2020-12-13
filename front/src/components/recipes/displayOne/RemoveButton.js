import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function RemoveButton({ onClick }) {
  return (
    <button
      className="p-2 mr-2 text-gray-400 hover:text-red-500"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faTrash} size="1x" color="" />
    </button>
  );
}
