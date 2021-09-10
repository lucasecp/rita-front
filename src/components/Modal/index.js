import React from 'react'

import closeIcon from '@/assets/icons/close.svg'

import { Container } from './styles'

function Modal({ children, show, onCloseModal }) {
  const toCloseModal = () => {
    onCloseModal(false)
  }

  return (
    show && (
      <Container>
        <div>
          {onCloseModal && <img src={closeIcon} onClick={toCloseModal} />}
          {children}
        </div>
      </Container>
    )
  )
}

export default Modal
