import React from "react";
import Logo from "../../containers/page-wrapper/Logo";

export default function AuthPage({ children, isLogin }) {
  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div>
            <Logo></Logo>
          </div>
          <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">
            {isLogin ? "Connecte-toi" : "Inscris-toi"}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 max-w">
            Ou
            <a
              href={isLogin ? "/signup" : "/login"}
              className="font-medium text-green-500 hover:text-green-600 ml-2"
            >
              {isLogin ? "inscris-toi" : "connecte-toi"}
            </a>
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
