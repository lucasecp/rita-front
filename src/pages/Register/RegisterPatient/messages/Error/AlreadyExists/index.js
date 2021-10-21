import ButtonPrimary from '@/components/Button/Primary'
import React from 'react'
import { Container } from '../../style'
import error from '@/assets/icons/alerts/error.svg'
import { useModal } from '@/hooks/useModal'
// import { useHistory } from 'react-router'
const alreadyExists = ({ message }) => {
  const { closeModal } = useModal()
  return (
    <Container>
      <img src={error} />
      <p>{message}</p>
      <ButtonPrimary onClick={closeModal}>OK</ButtonPrimary>
    </Container>
  )
}

export default alreadyExists
