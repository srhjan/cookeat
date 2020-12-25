import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import RecipeList from "./components/recipes/list/RecipeList";
import CreateRecipe from "./components/recipes/create/CreateRecipe";
import Recipe from "./components/recipes/displayOne/Recipe";
import EditRecipe from "./components/recipes/edit/EditRecipe";
import DesignPage from "./containers/page-wrapper/PageWrapper";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import UserProfile from "./components/users/userProfile/UserProfile";

// Le terme Guard signifie "remplir des conditions pour passer"
function ConnectedStatusGuard({ shouldBeConnected, redirectTo, children }) {
  const isConnected = useSelector((state) => state.users.current.isConnected);
  if (isConnected !== shouldBeConnected) {
    return <Redirect to={redirectTo} />;
  }
  return children;
}

function UnauthenticatedRoute(props) {
  return (
    <ConnectedStatusGuard shouldBeConnected={false} redirectTo="/">
      <Route {...props}></Route>
    </ConnectedStatusGuard>
  );
}

function AuthRoute(props) {
  return (
    <ConnectedStatusGuard shouldBeConnected={true} redirectTo="/login">
      <Route {...props}></Route>
    </ConnectedStatusGuard>
  );
}

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <UnauthenticatedRoute exact path="/login">
          <DesignPage>
            <SignIn></SignIn>
          </DesignPage>
        </UnauthenticatedRoute>
        <UnauthenticatedRoute exact path="/signup">
          <DesignPage>
            <SignUp></SignUp>
          </DesignPage>
        </UnauthenticatedRoute>

        <AuthRoute exact path="/me">
          <DesignPage>
            <UserProfile></UserProfile>
          </DesignPage>
        </AuthRoute>
        <AuthRoute exact path="/">
          <DesignPage>
            <RecipeList></RecipeList>
          </DesignPage>
        </AuthRoute>
        <AuthRoute exact path="/createRecipe">
          <DesignPage>
            <CreateRecipe></CreateRecipe>
          </DesignPage>
        </AuthRoute>
        <AuthRoute exact path="/recipe/:recipe_id">
          <DesignPage>
            <Recipe></Recipe>
          </DesignPage>
        </AuthRoute>
        <AuthRoute exact path="/recipe/:recipe_id/edit">
          <DesignPage>
            <EditRecipe></EditRecipe>
          </DesignPage>
        </AuthRoute>

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
