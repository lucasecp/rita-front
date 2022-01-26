import React, { useState } from 'react'
import { Container } from './styles'
import InputMask from '@/components/Form/InputMask'

interface HeaderProps {
  setCpf: React.Dispatch<React.SetStateAction<string>>
  cpf: string
  errors: string
  setErrors: React.Dispatch<React.SetStateAction<string>>
}

const Header: React.FC<HeaderProps> = ({ setCpf, cpf, errors, setErrors }) => {
  return (
    <Container>
      <InputMask
        mask="999.999.999-99"
        label="CPF do titular:"
        value={cpf}
        setValue={setCpf}
        hasError={!!errors}
        msgError={errors}
      />
    </Container>
  )
}

export default Header
