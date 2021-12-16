import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useEffect } from 'react'
// import { useHistory } from 'react-router'
import Filter from './Filter'

// import { DefaultLayout }from '@/components/Layout/DefaultLayout'

import { Container } from './styles'

function AnalyzePatients() {
  useEffect(() => {
    document.title = 'Rita Saúde | Autorizações'
  }, [])
  return (
    <DefaultLayout title="Autorizações">
      <Container>
        <Filter />
      </Container>
    </DefaultLayout>
  )
}

export default AnalyzePatients
