import React from 'react'
import { Container } from './styles'
import warning from '@/assets/icons/alerts/warning.svg'
import OutlineButton from '@/components/Button/Outline'
import { useModal } from '@/hooks/useModal'

export const GeneralFieldsErrors: React.FC = () => {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={warning} />
      <p>
        Algumas informações estão incorretas. Preencha os campos em vermelho
        para continuar
      </p>
      <footer>
        <OutlineButton onClick={closeModal}>OK</OutlineButton>
      </footer>
    </Container>
  )
}
