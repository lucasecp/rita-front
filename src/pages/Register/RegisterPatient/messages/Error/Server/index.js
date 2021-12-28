import ButtonPrimary from '@/components/Button/Primary'
import React from 'react'
import { Container } from '../../style'
import error from '@/assets/icons/alerts/error.svg'
import { useModal } from '@/hooks/useModal'
// import { useHistory } from 'react-router'
const Server = () => {
  const { closeModal } = useModal()
  return (
    <Container>
      <img src={error} />
      <p>Verifique os dados informados e tente novamente.</p>
      <ButtonPrimary onClick={closeModal}>OK</ButtonPrimary>
    </Container>
  )
}

export default Server
