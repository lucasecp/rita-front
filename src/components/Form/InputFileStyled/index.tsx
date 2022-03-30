import React from 'react'
import { Container, Button } from './styles'
import { InputFile } from '@/components/Form/InputFile'
import MsgError from '@/components/MsgError'

interface InputDocumentProps {
  setValue: (value: string) => void
  label?: string
  color?: string
  msgError?: string
  hasError?: boolean
}

const InputFileStyled: React.FC<InputDocumentProps> = ({
  setValue,
  label,
  color,
  msgError,
}) => {
  return (
    <Container>
      {label && <label>{label}</label>}

      <InputFile setValue={setValue} clearOnClick>
        <span />
        <Button color={color}>Inserir arquivo</Button>
      </InputFile>
      {msgError && <MsgError>{msgError}</MsgError>}
    </Container>
  )
}

export default InputFileStyled
