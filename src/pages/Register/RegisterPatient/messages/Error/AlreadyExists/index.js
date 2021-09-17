import ButtonPrimary from '@/components/Button/Primary'
import React from 'react'
import { Container } from '../../style'
import error from '@/assets/icons/alerts/error.svg'
// import { useHistory } from 'react-router'
const alreadyExists = ({onShowModal,msg}) => {
  const handleCloseModal = () =>{
    onShowModal(false)
  }
  return (
    <Container>
      <img src={error} />
      <p>{msg}</p>
      <ButtonPrimary onClick={handleCloseModal}>OK</ButtonPrimary>
    </Container>
  )
}

export default alreadyExists
