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

require("./sql/queries")
  .then((db) => {
    // db.getRecipes est un handler/controleur, il va "attraper"/recevoir la requete
    app.get("/recipes", db.getRecipes);
    app.get("/recipes/:id", db.getRecipeById);
    app.get("/units", db.getUnits);
    app.post("/recipes", db.createRecipe);
    app.put("/recipes/:id", db.updateRecipe);
    app.delete("/recipes/:id", db.deleteRecipe);
    app.listen(port, () => {
      console.log(`App running on port ${port}.`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
