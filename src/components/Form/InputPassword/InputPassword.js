import React ,{ useRef, useState } from 'react'
import { BtnEye, Container,Input } from './style'
import eye from '../../../assets/icons/eye.png'

const InputPassword = (props) => {
  const [activeEyes, setActiveEyes] = useState(false)
  const inputPass = useRef()

  const handleChange = (e) => {
    props.setValue(e.target.value)
    setActiveEyes(true)
  }
  const handleSeePassword = () =>
    inputPass.current.type === 'password'
      ? (inputPass.current.type = 'text')
      : (inputPass.current.type = 'password')

  return (
    <Container>
      <label htmlFor={props.label}>{props.label}</label>
      <Input
        type="password"
        value={props.value}
        id={props.label}
        onChange={handleChange}
        ref={inputPass}
        disabled={props.disabled}
        onFocus={() =>
          props.value ? setActiveEyes(true) : setActiveEyes(false)
        }
      />
      {activeEyes &&(
        <BtnEye type='button'  onClick={handleSeePassword}>
          <img src={eye} />
        </BtnEye>
      )}
    </Container>
  )
}
export default InputPassword
