import React from 'react'
import { Switch } from 'react-router-dom'

import MasterPage from '@/pages/MasterPage'

import Initial from '@/pages/ForgotPassword/IdentifyPerson'
import ConfirmData from '@/pages/ForgotPassword/ConfirmPhoneOrEmail'
import DefinePassoword from '@/pages/DefinePassword'

import Login from '@/pages/Login'
import NotFound from '@/pages/404'

import Route from './custom.routes'

import { operatorRoutes, validatorRoutes } from './modules'

import registerRoutesComponent from './register.routes'

import {
  CHANGE_PASSWORD,
  DEFINE_PASSWORD,
  FORGOT_PASSWORD_CONFIRM_DATA,
  FORGOT_PASSWORD_INIT,
  LOGIN,
  MASTERPAGE,
  NOT_FOUND,
} from './constants/namedRoutes/routes'
import { ChangePassword } from '@/pages/ChangePassword'

function Routes() {
  return (
    <Switch>
      {registerRoutesComponent}

      {validatorRoutes}

      {operatorRoutes}

      <Route path={MASTERPAGE} isPrivate component={MasterPage} />
      <Route path={LOGIN} exact component={Login} />

      <Route path={DEFINE_PASSWORD} component={DefinePassoword} />
      <Route path={FORGOT_PASSWORD_INIT} component={Initial} />
      <Route path={FORGOT_PASSWORD_CONFIRM_DATA} component={ConfirmData} />
      <Route path={CHANGE_PASSWORD} component={ChangePassword} />

      <Route path={NOT_FOUND} component={NotFound} />
    </Switch>
  )
}

export default Routes
