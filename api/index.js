const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { response } = require("express");
const app = express();
const port = 3001;
// Cors permet d'accéder à mon API à l'extérieur. C'est une sécurité.
const cors = require("cors");

//Limiter la taille de la requête (1000000 bytes = 1000 ko)
app.use(express.json({ limit: 1000000 }));

app.use(cors());
app.use(bodyParser.json());

// la requete (quel que soit la route) va passer par le middleware, puis le handler visé
// app.use(function (req, res, next) {
//   console.log(req.url);
//   console.log(req.body);
//   console.log(req.params);
//   next();
// });

// https://github.com/expressjs/morgan
app.use(morgan("dev"));

require("./models").then(({ RecipeModel, UserModel }) => {
  // db.getRecipes est un handler/controleur, il va "attraper"/recevoir la requete
  app.get("/recipes", RecipeModel.getAll);
  app.get("/recipes/:id", RecipeModel.getById);
  app.get("/units", RecipeModel.getUnits);
  app.post("/recipes", RecipeModel.create);
  app.put("/recipes/:id", RecipeModel.update);
  app.delete("/recipes/:id", RecipeModel.remove);

  app.post("/auth/signup", UserModel.signUp);
  app.post("/auth/login", UserModel.login);
  // app.post("/auth/authorization", UserModel.verify);

  app.listen(port, () => {
    console.log(`App running on port ${port}.`);
  });
});
