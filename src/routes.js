import React from "react";

import { Switch, Route } from "react-router-dom";

import CardSabin from "./views/Login/CardSabin";
import Header from "./components/Header";
import DefinePassword from './views/Login/DefinePassword'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Header} />
      <Route path="/cartao-sabin" component={CardSabin} />
      <Route path="/definir-senha" component={DefinePassword} />
    </Switch>
  );
}
