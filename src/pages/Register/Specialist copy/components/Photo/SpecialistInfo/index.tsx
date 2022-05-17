import React from 'react'
import { BasicInformationI } from '../../../types'

import { Container } from './styles'

interface SpecialistInfoProps {
  data: BasicInformationI
}

const SpecialistInfo: React.FC<SpecialistInfoProps> = ({ data }) => {
  // const { step } = useRegisterSpecialist()

  return (
    <Container>
      <h5>
        Registro Profissional: <span>{data?.profissionalRegister}</span>
      </h5>
      <h5>
        Órgão Emissor: <span>{data?.issuingAgencyToApi}</span>
      </h5>
      <h5>
        UF Órgão Emissor: <span>{data?.ufIssuingAgency}</span>
      </h5>
    </Container>
  )
}

export default SpecialistInfo
