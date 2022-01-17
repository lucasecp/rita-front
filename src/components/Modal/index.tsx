import React, { useEffect } from 'react'

import closeIcon from '@/assets/icons/close.svg'

import { Container } from './styles'

import { useModal } from '@/hooks/useModal'

export const Modal: React.FC = () => {
  const body = document.querySelector('body')

  const { message, modalVisible, closeable, closeModal } = useModal()

  useEffect(() => {
    if (body) {
      body.style.overflow = modalVisible ? 'hidden' : 'auto'
    }
  }, [modalVisible, body?.style.overflow])

  return (
    <Container show={modalVisible}>
      <div>
        {closeable && (
          <span>
            <img src={closeIcon} onClick={closeModal} />
          </span>
        )}
        {message}
      </div>
    </Container>
  )
}
