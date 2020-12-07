import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default function UpdateButton() {
  return (
    <button className="rounded shadow p-2 text-green-500">
      <FontAwesomeIcon icon={faEdit} size="1x" />
      <span className="font-thin ml-2 text-black">Editer la recette</span>
    </button>
  );
}
