import {DefaultLayout} from '@/components/Layout/DefaultLayout'
import React from 'react'
import Filter from './Filter'

import { Container } from './styles'

const Authorization = () => {

  return (
    <DefaultLayout title="Relatórios / Autorizações">
      <Container>
        <Filter />
      </Container>
    </DefaultLayout>
  )
}

export default Authorization