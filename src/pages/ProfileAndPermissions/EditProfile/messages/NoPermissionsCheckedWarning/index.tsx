// Esse componente será apagado. Apenas esperando a confirmação do uso do toast e nao mais do modal
import React from 'react'

import warning from '@/assets/icons/alerts/warning.svg'

import { useModal } from '@/hooks/useModal'
import { Container } from './styles'
import OutlineButton from '@/components/Button/Outline'

const NoPermissionsCheckedWarning: React.FC = () => {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={warning} />
      <p>Deve haver pelo menos uma permissão associada</p>
      <footer>
        <OutlineButton onClick={closeModal}>Ok</OutlineButton>
      </footer>
    </Container>
  )
}

export default NoPermissionsCheckedWarning
