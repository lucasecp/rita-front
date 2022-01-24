import React from 'react'
import { useHistory } from 'react-router'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { useModal } from '@/hooks/useModal'

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
