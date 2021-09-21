import React from 'react'
import { Switch } from 'react-router-dom'
import Header from '@/components/HeaderTest'
import Teste from '@/pages/Teste'
import MasterPage from '@/pages/MasterPage'

import registerRoutes from './register.routes'
import Password from '@/pages/Password'
import Login from '@/pages/Login'
import CustomRoutes from './CustomRoutes'

function Routes() {
  return (
    <Switch>
      {registerRoutes}
      <CustomRoutes exact path="/" component={Header} />

      <CustomRoutes path="/master-page" component={MasterPage}  />

      <CustomRoutes path="/password" component={Password} />
      <CustomRoutes path="/login" component={Login} />
      <CustomRoutes path="/teste" component={Teste} />
      <CustomRoutes path="/definir-senha" component={Password} />
    </Switch>
  )
}

export default Routes
