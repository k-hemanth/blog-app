import React from "react";
import { Switch, Route } from "react-router-dom";

import Posts from "../posts";
import Comments from "../comments";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Posts} />
      <Route exact path="/comments/:id" component={Comments} />
    </Switch>
  );
};
export default Routes;
