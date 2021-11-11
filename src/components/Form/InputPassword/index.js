import React, { useState } from 'react'

import eyeOpenedIcon from '@/assets/icons/eye-opened.svg'
import eyeClosedIcon from '@/assets/icons/eye-closed.svg'

import { Container } from './styles'

export const InputPassword = ({
  value = '',
  setValue = () => {},
  label = '',
  hasError = false,
  messageError = '',
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const onInputChange = (e) => {
    setValue(e.target.value)
  }

  const onToggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Container hasError={hasError}>
      {label && <label htmlFor={label}>{label}</label>}
      <div>
        <input
          type={showPassword ? 'text' : 'password'}
          id={label}
          onChange={onInputChange}
          {...rest}
        />
        <button type="button" onClick={onToggleShowPassword}>
          <img src={showPassword ? eyeClosedIcon : eyeOpenedIcon} />
        </button>
      </div>
      {messageError && <small>{messageError}</small>}
    </Container>
  )
}
