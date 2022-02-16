import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './custom.routes'

import { Initial } from '@/pages/Initial'
import Login from '@/pages/Login'
import { Profile } from '@/pages/Profile'
import NotFound from '@/pages/404'
import { FilterSellableItems } from '@/pages/SellableItems/FilterSellableItems'
import { SeeSellableItems } from '@/pages/SellableItems/SeeSellableItems'
import { EditSellableItems } from '@/pages/SellableItems/EditSellableItems'
import { SeeAllProfiles } from '@/pages/ProfileAndPermissions/SeeAllProfiles'
import { SeeOneProfile } from '@/pages/ProfileAndPermissions/SeeOneProfile'
import { EditProfile } from '@/pages/ProfileAndPermissions/EditProfile'
import { CreateProfile } from '@/pages/ProfileAndPermissions/CreateProfile'

import {
  directorRoutes,
  operatorRoutes,
  validatorRoutes,
  patientRoutes,
} from './modules'

import registerRoutesComponent from './grouping/register.routes'
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
} from './constants/namedRoutes/routes'
import { TestAddressPage } from '@/pages/TestAddressPage'

function Routes() {
  return (
    <Switch>
      {registerRoutesComponent}

      {passwordRoutesComponent}

      {validatorRoutes}

      {operatorRoutes}

      {directorRoutes}

      {patientRoutes}

      <Route
        path={FILTER_SELLABLE_ITEMS}
        isPrivate
        component={FilterSellableItems}
        exact
      />

      <Route
        path={DIRECTOR_SEE_ALL_PROFILES}
        isPrivate
        component={SeeAllProfiles}
        exact
      />

      <Route
        path={DIRECTOR_SEE_ONE_PROFILE}
        isPrivate
        component={SeeOneProfile}
      />

      <Route path={DIRECTOR_EDIT_PROFILE} isPrivate component={EditProfile} />

      <Route
        path={DIRECTOR_CREATE_PROFILE}
        isPrivate
        component={CreateProfile}
      />

      <Route path={SEE_SELLABLE_ITEMS} isPrivate component={SeeSellableItems} />

      <Route
        path={EDIT_SELLABLE_ITEMS}
        isPrivate
        component={EditSellableItems}
      />

      <Route path={PROFILE} isPrivate component={Profile} />

      <Route path={INITIAL_PAGE} isPrivate component={Initial} />

      <Route path={LOGIN} exact component={Login} />

      <Route path="/teste-de-endereco" exact component={TestAddressPage} />

      {/* <Route
        path="/gestao/planos/editar"
        exact
        component={() => (<DefaultLayout title="teste">teste</DefaultLayout>)}
      /> */}

      <Route path={NOT_FOUND} component={NotFound} />
    </Switch>
  )
}

export default Routes
