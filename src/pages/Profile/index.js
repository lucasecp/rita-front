import React from 'react'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { DisplayUserInformations } from './containers/DisplayUserInformations'
import { EditPersonalData } from './containers/EditPersonalData'

import { Container } from './styles'

export const Profile = () => {
  return (
    <DefaultLayout title="Perfil">
      <Container>
        <DisplayUserInformations />
        <EditPersonalData />
      </Container>
    </DefaultLayout>
  )
}
