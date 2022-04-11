import React from 'react'
import { Container } from './styles'

interface Header {
  nameDoctor: string
}

const Header: React.FC<Header> = ({ nameDoctor }) => {
  return (
    <Container>
      <div>
        <div>
          <h5>{nameDoctor}</h5>
        </div>
        {/* <div>
          <h6>CPF:</h6>
          <h5>{data.cpf}</h5>
        </div> */}
      </div>

    </Container>
  )
}

export default Header
