import React, { useState } from 'react'
import { Container } from './styles'
import { HolderI } from '../../types/index'

interface HolderInfoProps {
  data: HolderI
  hidden: boolean
}

const HolderInfo: React.FC<HolderInfoProps> = ({ data, hidden }) => {
  return (
    <Container hidden={hidden}>
      <div>
        <div>
          <h6>Clínica:</h6>
          <h5>{data.name}</h5>
        </div>
        <div>
          <h6>Especialista:</h6>
          <h5>{data.cpf}</h5>
        </div>
      </div>
      <span>Plano {data.plan}</span>
    </Container>
  )
}

export default HolderInfo
