import React from "react";

export default function Methods({ recipe }) {
  return (
    <div className="flex flex-col shadow appearance-none border rounded py-2 px-3 text-gray-700  mt-3 bg-white">
      <div className="mt-2 mb-4 text-teal-400 font-bold font-sans text-xl text-center uppercase p-2">
        étapes à suivre
      </div>
      <div className="mb-5">
        {recipe.methods.map((step, i) => {
          return (
            <div
              key={step.method_id}
              className="flex flex-row text-lg font-thin ml-24 mr-24 "
            >
              <div className="rounded-full bg-red-300 text-white font-semibold h-8 w-8 flex items-center justify-center mr-3 p-3 mb-4">{`${
                i + 1
              }`}</div>
              <div className="break-all mb-4">{`${step.content}`}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
