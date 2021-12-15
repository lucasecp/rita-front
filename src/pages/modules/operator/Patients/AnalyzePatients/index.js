import { DefaultLayout } from '@/components/Layout/DefaultLayout'
// import { OPERATOR_SEE_ONE_PATIENT } from '@/routes/constants/namedRoutes/routes'
import React, { useEffect } from 'react'
// import { useHistory } from 'react-router'
import Filter from './Filter'

// import { DefaultLayout }from '@/components/Layout/DefaultLayout'

import { Container } from './styles'

function AnalyzePatients() {

  useEffect(() => {
    document.title = 'Rita Saúde | Analizar Paciente'
  }, [])
  // const history = useHistory()

  // const seeOnePatient = (cpf) => {
  //   history.push(OPERATOR_SEE_ONE_PATIENT, { cpf })
  // }

  return (
    <DefaultLayout title="Pacientes">
      <Container>
        <Filter />
      </Container>
    </DefaultLayout>
  )
}

export default AnalyzePatients
