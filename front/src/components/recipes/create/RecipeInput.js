import React from "react";

export default function RecipeInput({ label, placeholder, value, onChange }) {
  return (
    <div>
      <div className="text-center font-thin text-lg">{label}</div>
      <input
        className="w-full border-b-2 border-gray-400 font-thin py-2 px-3 mb-3 focus:border-orange-400 placeholder-gray-400 focus:placeholder-orange-400 text-lg font-sans"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></input>
    </div>
  );
}
