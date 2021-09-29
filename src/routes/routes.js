import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '@/components/HeaderTest'
import Teste from '@/pages/Teste'
import MasterPage from '@/pages/MasterPage'

import registerRoutes from './register.routes'
import Password from '@/pages/DefinePassword'
import Login from '@/pages/Login'
import CustomRoutes from './custom.routes'
import Initial from '@/pages/ForgotPassword/IdentifyPerson'
import NotFound from '@/pages/404'
import ConfirmData from '@/pages/ForgotPassword/ConfirmPhoneOrEmail'

function Routes() {
  return (
    <Switch>
      {registerRoutes}
      <CustomRoutes exact path="/" component={Header} />

      <CustomRoutes path="/master-page" isPrivate component={MasterPage} />
      <Route path="/login" component={Login} />
      <CustomRoutes path="/teste" isPrivate component={Teste} />
      <CustomRoutes path="/definir-senha" component={Password} />

      <CustomRoutes path="/esqueci-senha/inicio" component={Initial} />
      <CustomRoutes
        path="/esqueci-senha/confirmar-dados"
        component={ConfirmData}
      />
      <CustomRoutes path="*" component={NotFound} />
    </Switch>
  )
}

export default Routes
