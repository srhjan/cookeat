import React from "react";

export default function Photo() {
  return (
    <div className="photo w-full h-full flex items-center justify-center ">
      <div className="borderPhoto flex justify-center hover:border-orange-400 items-center bg-white border border-dashed rounded text-gray-700">
        <label
          htmlFor="image_upload"
          className="label-file text-5xl font-hairline hover:text-orange-400 py-2 px-4 rounded text-gray-700 inline-flex "
        >
          +
        </label>
        <input
          type="file"
          id="image_upload"
          className="input-file"
          accept="image/png, image/jpeg"
        ></input>
      </div>
    </div>
  );
}
