import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/users/actions";
import AuthPage from "./AuthPage";

export default function SignUp() {
  // Register => Données qu'on souhaite enregistrer
  // Watch => Récupérer la valeur d'un input en continue
  // Par ex pour afficher le nombre de caractères qu'on tape
  // Errors => Montrer les erreurs de validation (un champ pas rempli...)
  // HandleSubmit => Fonction qui prend une fonction qui sera appelée quand on submit

  const dispatch = useDispatch();
  const { register, handleSubmit, watch, errors } = useForm();

  function onSubmitForm(data) {
    dispatch(signUp(data));
  }

  return (
    <div>
      <AuthPage isLogin={false}>
        <div>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmitForm)}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Prénom
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  ref={register({ required: true })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-gray-700"
              >
                Nom
              </label>
              <div className="mt-1">
                <input
                  id="surname"
                  name="surname"
                  ref={register({ required: true })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
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
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Créer un compte
              </button>
            </div>
          </form>
        </div>
      </AuthPage>
    </div>
  );
}
