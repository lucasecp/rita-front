import React from 'react'
import CustomRoutes from '../custom.routes'

import Initial from '@/pages/password/ForgotPassword/IdentifyPerson'
import ConfirmData from '@/pages/password/ForgotPassword/ConfirmPhoneOrEmail'
import DefinePassoword from '@/pages/password/DefinePassword'
import { ChangePassword } from '@/pages/password/ChangePassword'

import {
  CHANGE_PASSWORD,
  DEFINE_PASSWORD,
  FORGOT_PASSWORD_CONFIRM_DATA,
  FORGOT_PASSWORD_INIT,
} from '../constants/namedRoutes/routes'

const passwordRoutes = [
  {
    path: DEFINE_PASSWORD,
    component: DefinePassoword,
  },
  {
    path: FORGOT_PASSWORD_INIT,
    component: Initial,
  },
  {
    path: FORGOT_PASSWORD_CONFIRM_DATA,
    component: ConfirmData,
  },
  {
    path: CHANGE_PASSWORD,
    component: ChangePassword,
    isPrivate: true,
  },
]

const passwordRoutesComponent = passwordRoutes.map((props, key) => (
  <CustomRoutes {...props} key={key} />
))

export default passwordRoutesComponent
