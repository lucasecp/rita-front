import {DefaultLayout} from '@/components/Layout/DefaultLayout'
import React,{useEffect} from 'react'
import Filter from './Filter'

import { Container } from './styles'

const Authorization = () => {
  useEffect(() => {
    document.title = 'Rita Saúde | Autorizações'
  }, [])

  return (
    <DefaultLayout title="Relatórios">
      <Container>
        <Filter />
      </Container>
    </DefaultLayout>
  )
}

export default Authorization
