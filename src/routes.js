import React from "react";

import { Switch, Route } from "react-router-dom";

import CardSabin from "./views/Login/CardSabin";
import RegisterCustomerSabinHealthCard from "./pages/CustomerSabinHealthCard/Register";

export default function Routes() {
  return (
    <Switch>
      <Route path="/card-sabin" component={CardSabin} />
      
      <Route
        path="/cadastro-cliente-cartao-sabin-saude"
        component={RegisterCustomerSabinHealthCard}
      />
    </Switch>
  );
}
