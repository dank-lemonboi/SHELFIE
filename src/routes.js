import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Shelf from "./components/Shelf";
import Create from "./components/Create";
import Update from "./components/Update";

export default (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/api/shelf/:id" component={Shelf} />
    <Route path="/api/create/:id" component={Create} />
    <Route path="/api/update/:id" component={Update} />
  </Switch>
);
