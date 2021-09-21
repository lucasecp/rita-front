import React, { useRef } from 'react'
import { Container } from './style'

const InputFile = ({ children, setValue, ...rest }) => {
  const inpFile = useRef(null)
  return (
    <Container onClick={() => inpFile.current.click()}>
      <input
        type="file"
        accept="image/*,.pdf"
        ref={inpFile}
        hidden
        onChange={({ target }) => setValue(target.files[0])}
        {...rest}
      />
      {children}
    </Container>
  )
}

export default InputFile
