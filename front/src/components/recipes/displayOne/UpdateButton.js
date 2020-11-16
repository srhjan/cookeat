import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default function UpdateButton() {
  return (
    <button className="rounded shadow p-2">
      <FontAwesomeIcon icon={faEdit} size="1x" color="#feb2b2" />
      <span className="font-thin ml-2">Editer la recette</span>
    </button>
  );
}
