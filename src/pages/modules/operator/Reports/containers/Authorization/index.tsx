import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useEffect } from 'react'
import Filter from './Filter'

import { Container } from './styles'

const Authorization: React.FC = () => {
  useEffect(() => {
    document.title = 'Rita Saúde | Relatórios'
  }, [])

  return (
    <DefaultLayout title="Relatórios / Autorizações">
      <Container>
        <Filter />
      </Container>
    </DefaultLayout>
  )
}

export default Authorization
