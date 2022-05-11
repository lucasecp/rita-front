import React, { useEffect } from 'react'

import { useDialog } from '@/hooks/useDialog'
import closeIcon from '@/assets/icons/close.svg'
import { Container } from './styles'

export const Dialog: React.FC = () => {
  const body = document.querySelector('body')

  const {
    dialogComponent, dialogIsVisible, dialogIsCloseable, dialogClose
  } = useDialog()

  useEffect(() => {
    if (body) {
      body.style.overflow = dialogIsVisible ? 'hidden' : 'auto'
    }
  }, [dialogIsVisible, body?.style.overflow])

  return (
    <Container show={dialogIsVisible}>
      <div>
        {dialogIsCloseable && (
          <span>
            <img src={closeIcon} onClick={dialogClose} />
          </span>
        )}
        {dialogComponent}
      </div>
    </Container>
  )
}
