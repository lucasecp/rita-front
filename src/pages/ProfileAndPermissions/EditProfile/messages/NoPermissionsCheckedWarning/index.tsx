import React from 'react'

import warning from '@/assets/icons/alerts/warning.svg'

import { useModal } from '@/hooks/useModal'
import { Container, ButtonGroup } from './style'
import OutlineButton from '@/components/Button/Outline'

const NoPermissionsCheckedWarning: React.FC = () => {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={warning} />
      <p>Deve haver pelo menos uma permissão associada</p>
      <ButtonGroup>
        <OutlineButton onClick={closeModal}>Ok</OutlineButton>
      </ButtonGroup>
    </Container>
  )
}

export default NoPermissionsCheckedWarning
