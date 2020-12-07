import React from "react";

export default function Picture({ picture, onChange }) {
  return (
    <div className="photo w-full h-full flex items-center justify-center ">
      <div className="group borderPhoto flex justify-center hover:border-orange-400  items-center bg-white border border-dashed rounded text-gray-700">
        {picture ? (
          <img src={picture} className="object-cover w-full h-full"></img>
        ) : (
          <>
            <label
              htmlFor="image_upload"
              className="label-file text-5xl font-hairline py-2 px-4 rounded text-gray-300 inline-flex group-hover:text-orange-400"
            >
              +
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
        )}
      </div>
    </div>
  );
}
