import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import Wizard from "./component/Wizard/Wizard";
import Image from "./component/Image/Image";
import Rent from "./component/Rent/Rent";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/wizard" component={Wizard} />
    <Route path="/image" component={Image} />
    <Route path="/rent" component={Rent} />
  </Switch>
);
