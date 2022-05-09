import React from 'react'
import { Switch } from 'react-router-dom'

import { Route } from './custom.routes'

import { Initial } from '@/pages/Initial'
import Login from '@/pages/Login'
import { Profile } from '@/pages/Profile'
import { NotFound } from '@/pages/NotFound'
import { FilterSellableItems } from '@/pages/SellableItems/FilterSellableItems'
import { CreateSellableItem } from '@/pages/SellableItems/CreateSellableItem'
import { SeeSellableItems } from '@/pages/SellableItems/SeeSellableItems'
import { EditSellableItems } from '@/pages/SellableItems/EditSellableItems'
import { SeeAllProfiles } from '@/pages/ProfileAndPermissions/SeeAllProfiles'
import { SeeOneProfile } from '@/pages/ProfileAndPermissions/SeeOneProfile'
import { EditProfile } from '@/pages/ProfileAndPermissions/EditProfile'
import { CreateProfile } from '@/pages/ProfileAndPermissions/CreateProfile'
import ChooseProfile from '@/pages/ChooseProfile/'

import {
  directorRoutes,
  operatorRoutes,
  validatorRoutes,
  patientRoutes,
  specialistRotes,
  clinicRotes,
} from './modules'

import registerRoutesComponent from './grouping/register.routes'
import { newRegisterPatientRoutes } from './grouping/physicalPersonRegister.routes'
import passwordRoutesComponent from './grouping/password.routes'

import {
  LOGIN,
  INITIAL_PAGE,
  NOT_FOUND,
  PROFILE,
  SEE_SELLABLE_ITEMS,
  FILTER_SELLABLE_ITEMS,
  EDIT_SELLABLE_ITEMS,
  DIRECTOR_SEE_ALL_PROFILES,
  DIRECTOR_SEE_ONE_PROFILE,
  DIRECTOR_EDIT_PROFILE,
  DIRECTOR_CREATE_PROFILE,
  CREATE_SELLABLE_ITEMS,
  REASON_TO_LEAVE,
  PLANS,
  CHOOSE_PROFILE,
} from './constants/namedRoutes/routes'
import { TestAddressPage } from '@/pages/TestAddressPage'
import { ReasonToLeave } from '@/pages/ReasonToLeave'
import { Plans } from '@/pages/Register/Plans'

export const Routes: React.FC = () => {
  return (
    <Switch>
      {registerRoutesComponent}

      {newRegisterPatientRoutes}

      {passwordRoutesComponent}

      {validatorRoutes}

      {operatorRoutes}

      {directorRoutes}

      {patientRoutes}

      {specialistRotes}

      {clinicRotes}

      <Route
        path={DIRECTOR_CREATE_PROFILE}
        isPrivate
        component={CreateProfile}
      />

      <Route
        path={DIRECTOR_SEE_ONE_PROFILE}
        isPrivate
        component={SeeOneProfile}
      />

      <Route
        path={DIRECTOR_EDIT_PROFILE}
        exact
        isPrivate
        component={EditProfile}
      />

      <Route
        path={DIRECTOR_SEE_ALL_PROFILES}
        isPrivate
        exact
        component={SeeAllProfiles}
      />

      <Route
        path={CREATE_SELLABLE_ITEMS}
        isPrivate
        component={CreateSellableItem}
      />

      <Route path={SEE_SELLABLE_ITEMS} isPrivate component={SeeSellableItems} />

      <Route
        path={EDIT_SELLABLE_ITEMS}
        isPrivate
        component={EditSellableItems}
      />

      <Route
        path={FILTER_SELLABLE_ITEMS}
        isPrivate
        component={FilterSellableItems}
      />

      <Route path={PROFILE} isPrivate component={Profile} />

      <Route path={INITIAL_PAGE} isPrivate component={Initial} />

      <Route path={LOGIN} exact component={Login} />

      <Route path={CHOOSE_PROFILE} exact isPrivate component={ChooseProfile} />

      <Route path={REASON_TO_LEAVE} component={ReasonToLeave} />

      <Route path={PLANS} component={Plans} />

      <Route path="/teste-de-endereco" component={TestAddressPage} />

      {/* <Route
        path="/gestao/planos/editar"
        exact
        component={() => (<DefaultLayout title="teste">teste</DefaultLayout>)}
      /> */}

      <Route path={NOT_FOUND} component={NotFound} />
    </Switch>
  )
}
