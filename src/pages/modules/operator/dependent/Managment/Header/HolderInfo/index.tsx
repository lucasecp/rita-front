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
        <h3>{data.name}</h3> <h3>CPF: {data.cpf}</h3>
      </div>
      <span>{data.plan}</span>
    </Container>
  )
}

export default HolderInfo
