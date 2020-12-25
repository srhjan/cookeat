const massive = require("massive");

module.exports = massive({
  user: "postgres",
  host: "localhost",
  database: "cookeat",
  port: 5432,
}).then((db) => {
  return {
    RecipeModel: require("./RecipeModel")(db),
    UserModel: require("./UserModel")(db),
  };
});
