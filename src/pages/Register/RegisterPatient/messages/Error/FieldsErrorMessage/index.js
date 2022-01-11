import React from 'react'
import { Container, ButtonGroup } from '../../style'
import warning from '@/assets/icons/alerts/warning.svg'
import OutlineButton from '@/components/Button/Outline'
import { useModal } from '@/hooks/useModal'

const FieldsErrorMessage = () => {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={warning} />
      <p>
        Algumas informações estão incorretas. Preencha os campos em vermelho
        para continuar
      </p>
      <ButtonGroup>
        <OutlineButton onClick={closeModal}>Ok</OutlineButton>
      </ButtonGroup>
    </Container>
  )
}

export default FieldsErrorMessage
