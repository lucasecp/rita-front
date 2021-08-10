import React from "react";

import { Switch, Route } from "react-router-dom";

import CardSabin from "./views/Login/CardSabin";

export default function Routes() {
  return (
    <Switch>
      <Route path="/card-sabin" component={CardSabin} />
    </Switch>
  );
}
