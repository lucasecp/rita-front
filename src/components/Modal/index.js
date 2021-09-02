import React from 'react'

import { Container } from './styles'

function Modal({ children, show }) {
  return (
    show && (
      <Container>
        <div>{children}</div>
      </Container>
    )
  )
}

export default Modal
