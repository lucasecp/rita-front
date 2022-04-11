import React from 'react'
import { daysLabel } from '../../../constants/days'
import { Container, Content } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      {Object.values(daysLabel).map((day) => (
        <Content key={day}>
          <h5>{day}</h5>
        </Content>
      ))}
    </Container>
  )
}

export default Header
