import React from 'react'
import { Switch } from 'react-router-dom'

import Header from '@/components/HeaderTest'
import Teste from '@/pages/Teste'
import MasterPage from '@/pages/MasterPage'

import Initial from '@/pages/ForgotPassword/IdentifyPerson'
import ConfirmData from '@/pages/ForgotPassword/ConfirmPhoneOrEmail'
import DefinePassoword from '@/pages/DefinePassword'

import Login from '@/pages/Login'
import NotFound from '@/pages/404'

import Route from './custom.routes'

import validatorRoutesComponent from './validator/validator.routes'
import operatorRoutesComponent from './operator/operator.routes'

import registerRoutesComponent from './register.routes'

import permissions from './constants/permissions'
import {LOGIN} from './constants/namedRoutes/routes'
import { useAuth } from '@/context/login'

function Routes() {
  const { userPermission } = useAuth()

  return (
    <Switch>
      {registerRoutesComponent}

      {userPermission === permissions.VALIDATOR && validatorRoutesComponent}

      {/* {userPermission === permissions.OPERATOR && operatorRoutesComponent} */}

      {operatorRoutesComponent}

      <Route exact path="/" component={Header} />

      <Route path="/master-page" isPrivate component={MasterPage} />
      <Route path={LOGIN} component={Login} />
      <Route path="/teste" isPrivate component={Teste} />

      <Route path="/definir-senha" component={DefinePassoword} />
      <Route path="/esqueci-senha/inicio" component={Initial} />
      <Route path="/esqueci-senha/confirmar-dados" component={ConfirmData} />

      <Route path="*" component={NotFound} />
    </Switch>
  )
}

export default Routes
