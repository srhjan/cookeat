import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Design.css";
import Select from "react-select";
import { findAllUnits } from "../../../store/recipes/actions";
import { find, noop } from "lodash";

function Ingredient({ ingredient, units, onCreate, onChange, onRemove }) {
  const options = units.map((unit) => {
    return {
      value: unit.symbol,
      label: unit.name,
    };
  });

  const ingredientUnit =
    find(options, { value: ingredient.unit }) || options[0];

  return (
    <div className="infos-recipe flex flex-row">
      <div>
        <div className="text-center font-thin text-lg">Quantité</div>
        <input
          placeholder="Ex : 500"
          className="w-full border-b-2 border-gray-400 font-thin py-2 px-3 mb-3 focus:border-orange-400 focus:placeholder-orange-400 text-lg font-sans"
          value={ingredient.quantity}
          onChange={(e) => {
            onChange({ ...ingredient, quantity: e.target.value });
          }}
        ></input>
      </div>
      <div>
        <div className="text-center font-thin text-lg">Unité</div>
        <Select
          className="select mt-2 font-thin text-md"
          options={options}
          value={ingredientUnit}
          onChange={(newValue, actionMeta) => {
            if (actionMeta.action === "select-option") {
              onChange({ ...ingredient, unit: newValue.value });
            }
          }}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: "#feebc8",
              primary: "#f6ad55",
              neutral90: "#feebc8",
            },
          })}
        />
      </div>
      <div>
        <div className="text-center font-thin text-lg">Ingrédient</div>
        <input
          placeholder="Ex : Farine"
          className="w-full border-b-2 border-gray-400 font-thin py-2 px-3 mb-3 focus:border-orange-400 focus:placeholder-orange-400 text-lg font-sans"
          value={ingredient.name}
          onChange={(e) => {
            onChange({ ...ingredient, name: e.target.value });
          }}
        ></input>
      </div>
      {onCreate && (
        <button
          className="addButton mt-2 hover:border-orange-400 hover:text-orange-400 border border-dashed text-gray-800 font-thin py-2 px-4 rounded inline-flex items-center"
          onClick={onCreate}
        >
          +
        </button>
      )}
      {onRemove && (
        <button
          className="addButton mt-2 hover:border-orange-400 hover:text-orange-400 border border-dashed text-gray-800 font-thin py-2 px-4 rounded inline-flex items-center"
          onClick={onRemove}
        >
          -
        </button>
      )}
    </div>
  );
}

export default function Ingredients({ ingredients, setIngredients }) {
  const [newIngredient, setNewIngredient] = useState({
    name: "",
    quantity: "",
    unit: "",
  });
  const dispatch = useDispatch();
  const units = useSelector((state) => state.recipes.availableUnits);

  useEffect(() => {
    dispatch(findAllUnits());
  }, []);

  if (!units[0]) {
    return <div></div>;
  }
  return (
    <div>
      <div className="mb-5">
        {ingredients.map((ingredient, i) => {
          return (
            <Ingredient
              key={ingredient.ingredient_id}
              className="infos-recipe flex flex-row"
              ingredient={ingredient}
              units={units}
              onChange={(ingredientToUpdate) => {
                setIngredients(
                  ingredients.map((ing, j) => {
                    return i === j ? ingredientToUpdate : ing;
                  })
                );
              }}
              onRemove={() => {
                setIngredients(ingredients.filter((ing, j) => i !== j));
              }}
            />
          );
        })}

        <Ingredient
          ingredient={newIngredient}
          units={units}
          onCreate={(ingredientToCreate) => {
            setIngredients([...ingredients, newIngredient]);
            setNewIngredient({ name: "", quantity: "", unit: "" });
          }}
          onChange={(ingredient) => {
            setNewIngredient(ingredient);
          }}
        />
      </div>
    </div>
  );
}
