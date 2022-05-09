import React from 'react';
import { useModal } from '@/hooks/useModal'
import warningIcon from '@/assets/icons/alerts/warning.svg'
/** Styles */
import { Container, ButtonGroup } from './styles'
import OutlineButton from '@/components/Button/Outline';
import ButtonPrimary from '@/components/Button/Primary';
import { useHistory } from 'react-router-dom'
/** Styles */
import { CLINIC_SEE_ALL_USERS } from '@/routes/constants/namedRoutes/routes'

const ModalConfirmation: React.FC = () => {
  const { closeModal } = useModal()
  const history = useHistory()

  const onCancelInsert = () => {
    history.push(CLINIC_SEE_ALL_USERS)
    closeModal()
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>As informações não serão salvas. Confirma a saída?</p>

      <ButtonGroup>
        <OutlineButton onClick={closeModal}>Não</OutlineButton>
        <ButtonPrimary onClick={onCancelInsert}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  );
};

export default ModalConfirmation;
