import React from 'react'

import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'

import warningIcon from '@/assets/icons/alerts/warning.svg'
import { Container } from './styles'

export const AddADocument = () => {
  const { closeModal } = useModal()

  const backToDocuments = () => {
    closeModal()
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>Insira um documento no campo “Frente”</p>
      <footer>
        <OutlineButton onClick={backToDocuments}>Ok</OutlineButton>
      </footer>
    </Container>
  )
}
