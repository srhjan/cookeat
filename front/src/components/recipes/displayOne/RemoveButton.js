import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function RemoveButton({ onClick }) {
  return (
    <button className="rounded shadow p-2" onClick={onClick}>
      <FontAwesomeIcon icon={faTrash} size="1x" color="#22C55E" />
      <span className="font-thin ml-2">Supprimer la recette</span>
    </button>
  );
}
