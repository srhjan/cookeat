import React from "react";

export default function Picture({ picture, onChange }) {
  return (
    <div className="picture group flex flex-col hover:border-orange-400 relative border-none rounded text-gray-700 bg-white z-0 w-full">
      <>
        <label
          htmlFor="image_upload"
          className="label-file text-5xl font-hairline h-full w-full rounded flex justify-center items-center text-gray-300 inline-flex group-hover:text-orange-400"
        >
          {picture ? (
            <img
              src={picture}
              className="object-cover w-full h-full border-none"
            ></img>
          ) : (
            <span>+</span>
          )}
        </label>
        <input
          type="file"
          id="image_upload"
          className="input-file"
          accept="image/png, image/jpeg"
          onChange={(e) => {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = () => onChange(reader.result);
            reader.onerror = (error) => console.error(error);
          }}
        ></input>
      </>
    </div>
  );
}
