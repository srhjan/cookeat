const _ = require("lodash");

const sortMethodsByPosition = {
  order: [
    {
      field: "methods.position",
      direction: "asc",
    },
  ],
};

function getSQLPayloadFromRecipe(recipe) {
  return {
    ...recipe,
    ingredients: recipe.ingredients.map((ingredient) => {
      return {
        ...ingredient,
        recipe_id: undefined,
      };
    }),
    methods: recipe.methods.map((method, i) => {
      return {
        ...method,
        recipe_id: undefined,
        position: i + 1,
      };
    }),
  };
}

// ici on doit exporter une fonction qui prend en parametre la connection db
module.exports = (db) => {
  const recipesJoinsQuery = db.recipes.join({
    ingredients: {},
    methods: {},
  });

  const getAll = (req, res) => {
    recipesJoinsQuery.find({}, sortMethodsByPosition).then((recipes) => {
      res.send(recipes);
    });
  };

  const getById = (req, res) => {
    recipesJoinsQuery
      .find({ recipe_id: req.params.id }, sortMethodsByPosition)
      .then((recipes) => {
        res.send(recipes[0]);
      });
  };

  const getUnits = (req, res) => {
    return db.units.find({}).then((units) => {
      res.send(units);
    });
  };

  const create = (req, res) => {
    const recipe = req.body;
    recipesJoinsQuery
      .insert(getSQLPayloadFromRecipe(recipe))
      .then((createdRecipe) => {
        // Here the created recipe doesn't contain methods and ingredients,
        // so we need to make a db query to get the full one.
        return recipesJoinsQuery
          .find(
            {
              recipe_id: createdRecipe.recipe_id,
            },
            sortMethodsByPosition
          )
          .then(_.head);
      })
      .then((createdRecipe) => res.send(createdRecipe));
  };

  const update = (req, res) => {
    const recipe = req.body;
    console.log("recipe: ", recipe);
    // We can't update multiple table with massivejs, so we need to, first, delete the recipe.
    // Then, we re-create this recipe with news changes.
    db.recipes
      .destroy({ recipe_id: recipe.recipe_id })
      .then(() => {
        return recipesJoinsQuery.insert(getSQLPayloadFromRecipe(recipe));
      })
      .then((updatedRecipe) => {
        return recipesJoinsQuery
          .find(
            {
              recipe_id: updatedRecipe.recipe_id,
            },
            sortMethodsByPosition
          )
          .then(_.head);
      })
      .then((updatedRecipe) => res.send(updatedRecipe));
  };

  // https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/

  const remove = (req, res) => {
    db.recipes.destroy({ recipe_id: req.params.id }).then(() => {
      res.sendStatus(200);
    });
  };

  return {
    getAll,
    getById,
    getUnits,
    create,
    update,
    remove,
  };
};
