import React, { useEffect } from 'react'

import closeIcon from '@/assets/icons/close.svg'

import { Container } from './styles'

function Modal({ children, show, onCloseModal }) {
  const body = document.querySelector('body')

  useEffect(() => {
    body.style.overflow = show ? 'hidden' : 'auto'
  }, [show, body.style.overflow])

  const toCloseModal = () => {
    onCloseModal(false)
  }

  return (
    <Container show={show}>
      <div>
        {onCloseModal && (
          <span>
            <img src={closeIcon} onClick={toCloseModal} />
          </span>
        )}
        {children}
      </div>
    </Container>
  )
}

export default Modal
