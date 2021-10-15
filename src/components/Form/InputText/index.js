import hasNumber from '@/helpers/hasNumber'
import React from 'react'
import MsgError from '../../MsgError'
import { Container } from './styles'

const InputText = ({ label, setValue, hasError, type, msgError,variation, ...rest }) => {

  const handleChange = ({target}) =>{
    if(!setValue) return
    if(target.type === 'text'){
      if(hasNumber(target.value)) return
    }
    setValue(target.value)
  }

  return (
    <Container variation={variation}  hasError={hasError}>
      {label && <label htmlFor={label}>{label}</label>}
      <input
        type={type || 'text'}
        id={label}
        onChange={handleChange}
        {...rest}
      />
      {msgError && <MsgError>{msgError}</MsgError>}
    </Container>
  )
}

export default InputText
