import React from 'react'
import { Container, Button, ButtonInput } from './styles'
import { InputFile } from '@/components/Form/InputFile'
import MsgError from '@/components/MsgError'

interface InputDocumentProps {
  setValue: (file: File) => void
  label?: string
  color?: string
  msgError?: string
  hasError?: boolean
  disabled?: boolean
  name?: string
}

const InputFileStyled: React.FC<InputDocumentProps> = ({
  setValue,
  label,
  color,
  msgError,
  disabled,
  name,
}) => {
  return (
    <Container name={name}>
      {label && <label>{label}</label>}

      <InputFile setValue={setValue} disabled={disabled}>
        <ButtonInput disabled={disabled}/>
        <Button color={color} disabled={disabled}>
          Inserir arquivo
        </Button>
      </InputFile>
      {msgError && <MsgError>{msgError}</MsgError>}
    </Container>
  )
}

export default InputFileStyled
