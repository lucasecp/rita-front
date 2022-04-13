import React from 'react'
import { Container } from './styles'

interface HeaderProps {
  doctorInfo: {
    name: string
    issuingAgency: {
      name: string
      profissionalRegister: string
    }
  }
}

const Header: React.FC<HeaderProps> = ({ doctorInfo }) => {
  return (
    <Container>
      <div>
        <div>
          <h5>{doctorInfo.name}</h5>
        </div>
        <div>
          <h6>
            Órgão Emissor:{doctorInfo.issuingAgency.name} -{' '}
            {doctorInfo.issuingAgency.profissionalRegister}
          </h6>
        </div>
      </div>
    </Container>
  )
}

export default Header
