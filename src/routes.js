import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Shelf from "./components/Shelf";
import Create from "./components/Create";
import Update from "./components/Update";

export default (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/shelf/:id" component={Shelf} />
    <Route path="/create/:id" component={Create} />
    <Route path="/update/:id" component={Update} />
  </Switch>
);
