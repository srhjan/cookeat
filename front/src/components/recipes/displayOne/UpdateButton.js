import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default function UpdateButton() {
  return (
    <button className="p-2 text-gray-400 hover:text-orange-400">
      <FontAwesomeIcon icon={faEdit} size="1x" />
    </button>
  );
}
