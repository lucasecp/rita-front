import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'
import { Container } from './styles'
import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'
import { useHistory } from 'react-router-dom'
import { PATIENT_DEPENDENTS } from '@/routes/constants/namedRoutes/routes'

export const FieldsHasChangedWarning: React.FC = () => {
  const { closeModal } = useModal()
  const history = useHistory()

  const onNotExit = () => {
    closeModal()
  }

  const onExit = () => {
    closeModal()
    history.push(PATIENT_DEPENDENTS)
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>As informações não serão salvas. Confirma a saída?</p>
      <footer>
        <ButtonPrimary onClick={onNotExit}>Não</ButtonPrimary>
        <OutlineButton onClick={onExit}>Sim</OutlineButton>
      </footer>
    </Container>
  )
}
