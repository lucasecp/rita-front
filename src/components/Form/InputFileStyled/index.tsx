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
  disabled?:boolean
  name?: string
}

const InputFileStyled: React.FC<InputDocumentProps> = ({
  setValue,
  label,
  color,
  msgError,
  disabled,
  name

}) => {
  return (
    <Container name={name}>
      {label && <label>{label}</label>}

      <InputFile setValue={setValue} clearOnClick>
        <span />
        <Button color={color} disabled={disabled}>Inserir arquivo</Button>
      </InputFile>
      {msgError && <MsgError>{msgError}</MsgError>}
    </Container>
  )
}

export default InputFileStyled
