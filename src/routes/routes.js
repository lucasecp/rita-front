import React, { useState } from 'react'
import { Switch } from 'react-router-dom'
import Header from '@/components/HeaderTest'
import Teste from '@/pages/Teste'
import MasterPage from '@/pages/MasterPage'

import DefinePassoword from '@/pages/DefinePassword'
import Login from '@/pages/Login'
import Initial from '@/pages/ForgotPassword/IdentifyPerson'
import NotFound from '@/pages/404'
import ConfirmData from '@/pages/ForgotPassword/ConfirmPhoneOrEmail'

import Route from './custom.routes'

import validatorRoutesComponent from './validator/validator.routes'
import registerRoutesComponent from './register.routes'

import permissions from './permissions'
import { useAuth } from '@/context/login'

function Routes() {
  const { user } = useAuth()

  return (
    <Switch>
      {registerRoutesComponent}
      
      {user?.userPermission === permissions.VALIDATOR &&
        validatorRoutesComponent}

      <Route exact path="/" component={Header} />

      <Route path="/master-page" isPrivate component={MasterPage} />
      <Route path="/login" component={Login} />
      <Route path="/teste" isPrivate component={Teste} />

      <Route path="/definir-senha" component={DefinePassoword} />
      <Route path="/esqueci-senha/inicio" component={Initial} />
      <Route path="/esqueci-senha/confirmar-dados" component={ConfirmData} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}

export default Routes
