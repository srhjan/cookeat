import React, { useState } from "react";
import "./Design.css";
import { useDispatch } from "react-redux";
import {
  createNewRecipe,
  updateOneRecipe,
} from "../../../store/recipes/actions";
import Ingredients from "./Ingredients";
import { Redirect } from "react-router-dom";
import Title from "./Title";
import RecipeInput from "./RecipeInput";
import Photo from "./Photo";
import Methods from "./Methods";

export default function CreateRecipe({ recipe }) {
  const dispatch = useDispatch();
  const [recipeToCreate, setRecipeToCreate] = useState(
    recipe || {
      title: "",
      servings: "",
      prep_time: "",
      cook_time: "",
      ingredients: [],
      methods: [],
    }
  );
  const [recipeCreated, setRecipeCreated] = useState(false);
  const isNew = Boolean(!recipe);

  if (recipeCreated) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div className="bg-white p-3 mt-3">
        <div className="flex flex-row w-full mt-3">
          <div className="photo-container">
            <Photo></Photo>
          </div>
          <div className="w-full">
            <Title
              title={recipeToCreate.title}
              onChange={(newTitle) =>
                setRecipeToCreate({
                  ...recipeToCreate,
                  title: newTitle,
                })
              }
            ></Title>
          </div>
        </div>
        <div className="flex flex-col shadow appearance-none border rounded py-2 px-3 text-gray-700 mt-3 bg-white">
          <div className="mt-2 mb-4 text-teal-400 text-xl font-bold font-sans text-center uppercase p-2">
            Informations
          </div>
          <div className="infos-recipe flex flex-row">
            <div>
              <RecipeInput
                label="Nombre de personnes"
                placeholder="Ex : 2"
                value={recipeToCreate.servings}
                onChange={(newServings) =>
                  setRecipeToCreate({
                    ...recipeToCreate,
                    servings: newServings,
                  })
                }
              ></RecipeInput>
            </div>
            <div>
              <RecipeInput
                label="Temps de préparation"
                placeholder="Ex : 10 min"
                value={recipeToCreate.prep_time}
                onChange={(newPrepTime) =>
                  setRecipeToCreate({
                    ...recipeToCreate,
                    prep_time: newPrepTime,
                  })
                }
              ></RecipeInput>
            </div>
            <div>
              <RecipeInput
                label="Temps de cuisson"
                placeholder="Ex : 15 min"
                value={recipeToCreate.cook_time}
                onChange={(newCookTime) =>
                  setRecipeToCreate({
                    ...recipeToCreate,
                    cook_time: newCookTime,
                  })
                }
              ></RecipeInput>
            </div>
          </div>
        </div>
        <div className="flex flex-col shadow appearance-none border rounded py-2 px-3 text-gray-700  mt-3 bg-white">
          <div className="mt-2 mb-4 text-teal-400 font-bold font-sans text-xl text-center uppercase p-2">
            ingrédients
          </div>
          <Ingredients
            ingredients={recipeToCreate.ingredients}
            setIngredients={(newIngredients) =>
              setRecipeToCreate({
                ...recipeToCreate,
                ingredients: newIngredients,
              })
            }
          ></Ingredients>
        </div>
        <div className="flex flex-col shadow appearance-none border rounded py-2 px-3 text-gray-700  mt-3 bg-white">
          <div className="mt-2 mb-4 text-teal-400 font-bold font-sans text-xl text-center uppercase p-2">
            étapes à suivre
          </div>
          <Methods
            methods={recipeToCreate.methods}
            setMethods={(newMethods) =>
              setRecipeToCreate({
                ...recipeToCreate,
                methods: newMethods,
              })
            }
          ></Methods>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold mt-5 py-2 px-4 rounded inline-flex items-center"
            onClick={() => {
              if (isNew) {
                console.log("recipeToCreate: ", recipeToCreate);
                dispatch(createNewRecipe(recipeToCreate));
                setRecipeCreated(true);
              }
              console.log("recipeToCreate: ", recipeToCreate);
              dispatch(updateOneRecipe(recipeToCreate));
              setRecipeCreated(true);
            }}
          >
            <span className="">Enregistrer la recette</span>
          </button>
        </div>
      </div>
    </div>
  );
}
