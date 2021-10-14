import React from 'react'
import { Switch } from 'react-router-dom'

// import Header from '@/components/HeaderTest'
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
import {DEFINE_PASSWORD, FORGOT_PASSWORD_CONFIRM_DATA, FORGOT_PASSWORD_INIT, LOGIN, MASTERPAGE, NOT_FOUND, TESTE} from './constants/namedRoutes/routes'
import { useAuth } from '@/context/login'

function Routes() {
  const { userPermission } = useAuth()

  return (
    <Switch>
      {registerRoutesComponent}

      {userPermission === permissions.VALIDATOR && validatorRoutesComponent}

      {/* {userPermission === permissions.OPERATOR && operatorRoutesComponent} */}

      {operatorRoutesComponent}

      {/* <Route exact path="/" component={Header} /> */}

      <Route path={MASTERPAGE} isPrivate component={MasterPage} />
      <Route path={LOGIN} component={Login} />
      <Route path={TESTE} isPrivate component={Teste} />

      <Route path={DEFINE_PASSWORD} component={DefinePassoword} />
      <Route path={FORGOT_PASSWORD_INIT} component={Initial} />
      <Route path={FORGOT_PASSWORD_CONFIRM_DATA} component={ConfirmData} />

      <Route path={NOT_FOUND} component={NotFound} />
    </Switch>
  )
}

export default Routes
