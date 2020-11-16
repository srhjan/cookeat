const _ = require("lodash");
const massive = require("massive");

module.exports = massive({
  user: "postgres",
  host: "localhost",
  database: "cookeat",
  port: 5432,
}).then((db) => {
  const getRecipes = (req, res) => {
    db.recipes
      .join({
        ingredients: {},
        methods: {},
      })
      .find({})
      .then((recipes) => {
        res.send(recipes);
      });
  };

  const getRecipeById = (req, res) => {
    db.recipes
      .join({
        ingredients: {},
        methods: {},
      })
      .find({ recipe_id: req.params.id })
      .then((recipes) => {
        res.send(recipes[0]);
      });
  };

  const getUnits = (req, res) => {
    return db.units.find({}).then((units) => {
      res.send(units);
    });
  };

  const createRecipe = (req, res) => {
    const recipe = req.body;
    db.recipes
      .join({
        ingredients: {},
        methods: {},
      })
      .insert({
        ...recipe,
        ingredients: recipe.ingredients.map((ingredient) => {
          return {
            ...ingredient,
            recipe_id: undefined,
          };
        }),
        methods: recipe.methods.map((method) => {
          return {
            ...method,
            recipe_id: undefined,
          };
        }),
      })
      .then((createdRecipe) => {
        // Here the created recipe doesn't contain methods and ingredients,
        // so we need to make a db query to get the full one.
        return db.recipes
          .join({
            ingredients: {},
            methods: {},
          })
          .find({
            recipe_id: createdRecipe.recipe_id,
          })
          .then(_.head);
      })
      .then((createdRecipe) => res.send(createdRecipe));
  };

  const updateRecipe = (req, res) => {
    const recipe = req.body;
    console.log("recipe: ", recipe);
    // We can't update multiple table with massivejs, so we need to, first, delete the recipe.
    // Then, we re-create this recipe with news changes.
    db.recipes
      .destroy({ recipe_id: recipe.recipe_id })
      .then(() => {
        return db.recipes
          .join({
            ingredients: {},
            methods: {},
          })
          .insert({
            ...recipe,
            ingredients: recipe.ingredients.map((ingredient) => {
              return {
                ...ingredient,
                recipe_id: undefined,
              };
            }),
            methods: recipe.methods.map((method) => {
              return {
                ...method,
                recipe_id: undefined,
              };
            }),
          });
      })
      .then((updatedRecipe) => {
        return db.recipes
          .join({
            ingredients: {},
            methods: {},
          })
          .find({
            recipe_id: updatedRecipe.recipe_id,
          })
          .then(_.head);
      })
      .then((updatedRecipe) => res.send(updatedRecipe));
  };

  // https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/

  const deleteRecipe = (req, res) => {
    db.recipes.destroy({ recipe_id: req.params.id }).then(() => {
      res.sendStatus(200);
    });
  };

  return {
    getRecipes,
    getRecipeById,
    getUnits,
    createRecipe,
    updateRecipe,
    deleteRecipe,
  };
});
