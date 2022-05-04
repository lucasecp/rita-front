import React from 'react'
import { useModal } from '@/hooks/useModal'
import warningIcon from '@/assets/icons/alerts/warning.svg'
/** Styles */
import { Container, ButtonGroup } from './styles'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

interface ConfirmAuthorizationStatusProps {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}

const ConfirmAuthorizationStatus: React.FC<ConfirmAuthorizationStatusProps> = ( { setIsEditing }) => {
  const { closeModal } = useModal()

  const onCancelInsert = () => {
    closeModal()
    setIsEditing(false)
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>As informações não serão salvas. Confirma?</p>

      <ButtonGroup>
        <ButtonPrimary onClick={closeModal}>Não</ButtonPrimary>
        <OutlineButton onClick={onCancelInsert}>Sim</OutlineButton>
      </ButtonGroup>
    </Container>
  );
};

export default ConfirmAuthorizationStatus;
