import React from "react";

export default function Ingredients({ recipe }) {
  return (
    <div className="flex flex-col shadow mx-4 border rounded py-2 px-3 text-gray-700  mt-3 bg-white">
      <div className="mt-2 mb-4 text-green-500 font-bold font-sans text-xl text-center uppercase p-2">
        ingrédients
      </div>
      <div>
        {recipe.ingredients.map((ingredient) => {
          return (
            <div key={ingredient.ingredient_id} className="flex flex-row">
              <div className="displayText w-full text-lg font-thin">{`${ingredient.quantity} ${ingredient.unit} ${ingredient.name}`}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
