import React from 'react'
import { useScheduleSpecialist } from '../hooks'
import { Container } from './styles'

const Header: React.FC = () => {
  const { specialistName } = useScheduleSpecialist()

  return (
    <Container>
      <div>
        <div>
          <h5>{specialistName}</h5>
        </div>
      </div>
    </Container>
  )
}

export default Header
