import React from 'react'
import { Container } from './styles'

interface Header {
  specialistName: string
}

const Header: React.FC<Header> = ({ specialistName }) => {
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
