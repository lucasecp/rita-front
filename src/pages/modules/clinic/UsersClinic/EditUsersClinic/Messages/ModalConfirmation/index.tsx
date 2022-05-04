import React from 'react'
import { useModal } from '@/hooks/useModal'
import warningIcon from '@/assets/icons/alerts/warning.svg'
/** Styles */
import { Container, ButtonGroup } from './styles'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { DataToApiI } from '../../Types';

interface ModalConfirmationProps {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
  getUserClinicById: () => void
  setErrors: React.Dispatch<React.SetStateAction<DataToApiI>>
}

const ModalConfirmation: React.FC<ModalConfirmationProps> = ( { setIsEditing, getUserClinicById, setErrors }) => {
  const { closeModal } = useModal()

  const onCancelInsert = () => {
    closeModal()
    setIsEditing(false)
    getUserClinicById()
    setErrors({} as DataToApiI)
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

export default ModalConfirmation;
