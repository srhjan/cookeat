import React, { useState } from "react";
import "./Design.css";

export default function Methods({ methods, setMethods }) {
  const [newMethod, setNewMethod] = useState({
    content: "",
  });
  return (
    <div>
      <div className="mb-5">
        {methods.map((step, i) => {
          return (
            <div
              key={step.method_id}
              className="flex flex-row text-lg font-thin ml-24 mr-24 "
            >
              <div className="rounded-full bg-red-300 text-white font-semibold h-8 w-8 flex items-center justify-center mr-3 p-3 mb-4">{`${
                i + 1
              }`}</div>
              <input
                className="break-all w-full mb-4 font-thin"
                value={step.content}
                onChange={(e) =>
                  setMethods(
                    methods.map((m) => {
                      if (step === m) {
                        return { ...step, content: e.target.value };
                      }
                      return m;
                    })
                  )
                }
              ></input>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row items-center border border-dashed rounded ml-24 mr-24">
        <textarea
          className="w-full font-thin py-2 px-3 placeholder-gray-400 focus:placeholder-orange-400 text-lg font-sans"
          placeholder="Ex: Mélanger la farine avec les oeufs"
          value={newMethod.content}
          onChange={(e) => setNewMethod(e.target.value)}
        ></textarea>
        <button
          className="addButton m-1 hover:border-orange-400 hover:text-orange-400 border border-dashed text-gray-800 font-thin py-2 px-4 rounded inline-flex items-center"
          onClick={() => {
            setMethods([...methods, { content: newMethod }]);
            setNewMethod({ content: "" });
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
