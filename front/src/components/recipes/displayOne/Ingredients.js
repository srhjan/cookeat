import React from "react";

export default function Ingredients({ recipe }) {
  return (
    <div className="flex flex-col py-2 text-gray-700  mt-3">
      <div className="mt-2 mb-4 text-green-500 font-bold font-sans text-xl uppercase">
        ingrédients
      </div>
      <div>
        {recipe.ingredients.map((ingredient) => {
          return (
            <div key={ingredient.ingredient_id} className="flex flex-row">
              <div className="w-full text-lg">{`${ingredient.quantity} ${ingredient.unit} ${ingredient.name}`}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
