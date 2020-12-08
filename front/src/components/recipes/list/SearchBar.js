import React from "react";
import "../../../containers/page-wrapper/PageWrapper.css";

export default function SearchBar({ recipeTitle, onChange }) {
  return (
    <div className="p-6">
      <div className="text-gray-600 m-3 w-1/3 relative">
        <input
          type="search"
          placeholder="Rechercher une recette"
          className=" bg-white h-10 px-5 pr-16 rounded-full text-sm focus:outline-none w-full"
          value={recipeTitle}
          onChange={(e) => onChange(e.target.value)}
        ></input>
        <button className="absolute right-0 top-0 mt-2.5 mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-5 stroke-current text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
