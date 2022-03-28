import React, { useRef } from 'react'

import { Container } from './styles'

export const InputFile = ({
  children,
  setValue,
  clearOnClick = false,
  ...rest
}) => {
  const inpFile = useRef(null)

  return (
    <Container onClick={() => inpFile.current.click()}>
      <input
        type="file"
        ref={inpFile}
        hidden
        onChange={({ target }) => {
          setValue && setValue(target.files[0])
        }}
        onClick={({ target }) => {
          clearOnClick && setValue && setValue((target.value = null))
        }}
        {...rest}
      />
      {children}
    </Container>
  )
}
