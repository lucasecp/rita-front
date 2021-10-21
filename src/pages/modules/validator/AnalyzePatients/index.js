import DefaultLayout from '@/components/Layout/DefaultLayout'
import React from 'react'
import { useHistory } from 'react-router'
import Filter from './Filter'

// import DefaultLayout from '@/components/Layout/DefaultLayout'

import { Container } from './styles'

function AnalyzePatients() {

  return (
    <DefaultLayout title="Autorizações">
    <Container>
     <Filter/>
    </Container>
   </DefaultLayout>
  )
}

export default AnalyzePatients
