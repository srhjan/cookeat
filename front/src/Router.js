import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RecipeList from "./components/recipes/list/RecipeList";
import CreateRecipe from "./components/recipes/create/CreateRecipe";
import Recipe from "./components/recipes/displayOne/Recipe";
import EditRecipe from "./components/recipes/edit/EditRecipe";
import DesignPage from "./containers/page-wrapper/PageWrapper";

export default function Rooter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <DesignPage>
            <RecipeList></RecipeList>
          </DesignPage>
        </Route>
        <Route exact path="/createRecipe">
          <DesignPage>
            <CreateRecipe></CreateRecipe>
          </DesignPage>
        </Route>
        <Route exact path="/recipe/:recipe_id">
          <DesignPage>
            <Recipe></Recipe>
          </DesignPage>
        </Route>
        <Route exact path="/recipe/:recipe_id/edit">
          <DesignPage>
            <EditRecipe></EditRecipe>
          </DesignPage>
        </Route>
      </Switch>
    </Router>
  );
}
