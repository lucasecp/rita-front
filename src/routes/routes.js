import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '@/components/HeaderTest'
import Teste from '@/pages/Teste'
import MasterPage from '@/pages/MasterPage'

import registerRoutes from './register.routes'
import Password from '@/pages/Password'
import MenuProvider from '@/context/Menu'

function Routes() {
  return (
    <Switch>
      {registerRoutes}

      <Route exact path="/" component={Header} />

      <MenuProvider>
        <Route path="/master-page" component={MasterPage} />
      </MenuProvider>
      <Route path="/password" component={Password} />
      <Route path="/teste" component={Teste} />
      <Route path="/definir-senha" component={Password} />
    </Switch>
  )
}

export default Routes
