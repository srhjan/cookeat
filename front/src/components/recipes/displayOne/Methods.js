import React from "react";

export default function Methods({ recipe }) {
  return (
    <div className="flex flex-col text-gray-700 mt-6">
      <div className="mt-2 mb-4 text-green-500 font-bold font-sans text-xl uppercase">
        Étapes à suivre
      </div>
      <div className="mb-5">
        {recipe.methods.map((step, i) => {
          return (
            <div key={step.method_id} className="flex flex-row text-lg">
              <div className="rounded-full bg-orange-400 text-white font-semibold h-8 w-8 flex items-center justify-center mr-3 p-3 mb-4">{`${
                i + 1
              }`}</div>
              <div className="mb-4">{`${step.content}`}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
