import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import WarningError from '@/assets/icons/alerts/warning.svg'

import { Container } from '../../styles'

function ImportData({ onShowModal }) {
  const handleCloseModal = () => {
    onShowModal(false)
  }

  return (
    <Container>
      <img src={WarningError} />
      <p>Seus dados estão sendo analisados, pedimos que aguarde a aprovação pela nossa equipe.</p>
      <ButtonPrimary onClick={handleCloseModal}>Ok</ButtonPrimary>
    </Container>
  )
}

export default ImportData
