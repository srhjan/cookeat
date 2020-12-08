import React from "react";

export default function Title({ title, onChange }) {
  return (
    <div>
      <div className="shadow appearance-none border rounded w-full pb-2 px-3 text-gray-700 bg-white">
        <div className="font-bold font-sans text-xl text-center uppercase p-2 text-green-500">
          Nom de la recette
        </div>
        <input
          className="w-full border-b-2 border-gray-300 font-thin py-2 px-3 mb-2 focus:border-orange-400 placeholder-gray-400 focus:placeholder-orange-400 text-lg font-sans"
          placeholder="Ex : Cookies"
          value={title}
          onChange={(e) => onChange(e.target.value)}
        ></input>
      </div>
    </div>
  );
}
