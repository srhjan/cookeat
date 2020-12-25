import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function UserProfile({ picture, onChange }) {
  const user = useSelector((state) => state.users.current.user);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-light">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="flex justify-center items-center">
            <span class="inline-block relative">
              <img
                class="h-16 w-16 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span class="absolute bottom-0 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-green-400"></span>
            </span>
          </div>
          <div className="flex justify-center mt-2 ">
            <div>
              {user.name} {user.surname}
            </div>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} size="1x" color="#35d399" />
            <div className="pl-2 items-center">{user.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
