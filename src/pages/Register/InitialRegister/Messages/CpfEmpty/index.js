import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import errorIcon from '@/assets/icons/alerts/error.svg'

import { Container } from './styles'

function CpfEmpty({ onShowModal }) {
  const handleCloseModal = () => {
    onShowModal(false)
  }

  return (
    <>
      <img src={errorIcon} />
      <p>O campo CPF deve ser informado.</p>
      <ButtonPrimary onClick={handleCloseModal}>OK</ButtonPrimary>
    </>
  )
}

export default CpfEmpty
