import React from 'react'
import { Container } from './styles'
import InputMask from '@/components/Form/InputMask'

interface HeaderProps {
  setCpf: React.Dispatch<React.SetStateAction<string>>
  cpf: string
  errors: string
  hidden: boolean
}

const Header: React.FC<HeaderProps> = ({ setCpf, cpf, errors, hidden }) => {
  return (
    <Container hidden={hidden}>
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
