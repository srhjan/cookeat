import React from "react";
import "./PageWrapper.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faUtensilSpoon } from "@fortawesome/free-solid-svg-icons";

export default function Logo() {
  return (
    <div className="font-sans font-bold text-3xl m-auto text-center  uppercase flex flex-row items-center justify-center">
      <div className="text-green-500">Cook</div>
      <div className="border border-green-500 border-opacity-100 rounded-full w-10 h-10 flex justify-center items-center">
        <div className="flex justify-center h-6 w-9 items-center -ml-3">
          <FontAwesomeIcon
            icon={faUtensilSpoon}
            color="#FB923C"
            className="transform -rotate-45 -mr-2"
          ></FontAwesomeIcon>
          <FontAwesomeIcon icon={faUtensils} size="xs" color="#FB923C" />
        </div>
      </div>
      <div className="text-orange-400">Eat</div>
    </div>
  );
}
