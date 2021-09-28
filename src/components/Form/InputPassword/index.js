import React, { useRef } from 'react'
import { BtnEye, Container, Input } from './style'
import eye from '../../../assets/icons/eye.png'
import MsgError from '@/components/MsgError'

const InputPassword = ({value,setValue,label,hasError,msgError,...rest}) => {
  const inputPass = useRef()

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleSeePassword = () =>
    inputPass.current.type === 'password'
      ? (inputPass.current.type = 'text')
      : (inputPass.current.type = 'password')

  return (
    <Container>
     {label && <label htmlFor={label}>{label}</label>}
      <Input
        type="password"
        value={value}
        id={label}
        onChange={handleChange}
        ref={inputPass}
        hasError={hasError}
        {...rest}
      />
        <BtnEye type="button" onClick={handleSeePassword} >
          <img src={eye} />
        </BtnEye>
        {msgError && <MsgError>{msgError}</MsgError>}
    </Container>
  )
}
export default InputPassword
