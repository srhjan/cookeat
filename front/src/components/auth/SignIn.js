import React from "react";
import { useForm } from "react-hook-form";
import AuthPage from "./AuthPage";
import { login } from "../../store/users/actions";
import { useDispatch } from "react-redux";

export default function SignIn() {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, errors } = useForm();

  function onSubmitForm(data) {
    dispatch(login(data));
  }

  return (
    <div>
      <AuthPage isLogin={true}>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmitForm)}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                ref={register({ required: true })}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Mot de passe
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                ref={register({ required: true })}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="flex items-center text-sm  text-right">
            <a
              href="#"
              className="font-medium w-full text-gray-400 hover:text-gray-600"
            >
              Mot de passe oublié ?
            </a>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Valider
            </button>
          </div>
        </form>
      </AuthPage>
    </div>
  );
}
