import React from 'react'

import warning from '@/assets/icons/alerts/warning.svg'

import { useModal } from '@/hooks/useModal'
import { Container, ButtonGroup } from './style'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { useHistory } from 'react-router'

import { DIRECTOR_SEE_ALL_PROFILES } from '@/routes/constants/namedRoutes/routes'

const toConfirmCancel: React.FC = () => {
  const { closeModal } = useModal()
  const history = useHistory()

  const cancel = () => {
    closeModal()
    history.push(DIRECTOR_SEE_ALL_PROFILES)
  }

  return (
    <Container>
      <img src={warning} />
      <p>As alterações não serão salvas. Confirma a saída?</p>
      <ButtonGroup>
        <OutlineButton onClick={closeModal}>Não</OutlineButton>
        <ButtonPrimary onClick={cancel}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default toConfirmCancel
