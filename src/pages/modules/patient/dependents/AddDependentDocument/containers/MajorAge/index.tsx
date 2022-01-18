import React from 'react'

import { Container } from './styles'

interface MajorAgeProps {
  dependent: {
    id: number
    cpf: string
  }
}

export const MajorAge: React.FC<MajorAgeProps> = ({ dependent }) => {
  return <Container>MajorAge</Container>
}
