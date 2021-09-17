import ButtonPrimary from '@/components/Button/Primary'
import React from 'react'
import { Container,ButtonGroup } from '../style'
import warning from '@/assets/icons/alerts/warning.svg'
import { useHistory } from 'react-router'
import OutlineButton from '@/components/Button/Outline'
const Success = ({onShowModal}) => {
  const history = useHistory()
  const handleCloseModal = () =>{
    onShowModal(false)
    history.push('/')
  }
  return (
    <Container>
      <img src={warning} />
      <p>Seu cadastro ainda não foi concluído e as informações preenchidas não serão salvas. Confirma a saída?</p>
      <ButtonGroup>
        <OutlineButton onClick={() => onShowModal(false)}>Não</OutlineButton>
      <ButtonPrimary onClick={handleCloseModal}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default Success
