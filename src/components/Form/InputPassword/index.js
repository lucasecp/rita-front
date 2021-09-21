import React, { useRef } from 'react'
import { BtnEye, Container, Input } from './style'
import eye from '../../../assets/icons/eye.png'

const InputPassword = ({value,setValue,label,...rest}) => {
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
        {...rest}
      />
        <BtnEye type="button" onClick={handleSeePassword}>
          <img src={eye} />
        </BtnEye>
    </Container>
  )
}
export default InputPassword
