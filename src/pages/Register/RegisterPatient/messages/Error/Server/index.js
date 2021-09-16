import ButtonPrimary from '@/components/Button/Primary'
import React from 'react'
import { Container } from '../../style'
import error from '@/assets/icons/alerts/error.svg'
// import { useHistory } from 'react-router'
const Server = ({onShowModal}) => {
  const handleCloseModal = () =>{
    onShowModal(false)
  }
  return (
    <Container>
      <img src={error} />
      <p>Verifique os dados informados e tente novamente.</p>
      <ButtonPrimary onClick={handleCloseModal}>OK</ButtonPrimary>
    </Container>
  )
}

export default Server
