import React from 'react'
import { Switch,Route } from 'react-router-dom'
import Header from '@/components/HeaderTest'
import Teste from '@/pages/Teste'
import MasterPage from '@/pages/MasterPage'

import registerRoutes from './register.routes'
import Password from '@/pages/Password'
import Login from '@/pages/Login'
import CustomRoutes from './CustomRoutes'
import Initial from '@/pages/Login/ForgotPassword/Initial'
import NotFound from '@/pages/404'
import ConfirmData from '@/pages/Login/ForgotPassword/ConfirmData'

function Routes() {
  return (
    <Switch>
      {registerRoutes}
      <CustomRoutes exact path="/" component={Header} />

      <CustomRoutes path="/master-page" isPrivate component={MasterPage}  />
      <Route path="/login" component={Login} />
      <CustomRoutes path="/teste" component={Teste} />
      <CustomRoutes path="/definir-senha" component={Password} />
      <CustomRoutes path="/esqueci-senha/inicio" component={Initial} />
      <CustomRoutes path="/esqueci-senha/confirmar-dados" component={ConfirmData} />
      <CustomRoutes path="*" component={NotFound} />
    </Switch>
  )
}

export default Routes
