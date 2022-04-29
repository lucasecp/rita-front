import React from 'react'
/** Styled */
import { Container } from './styles'
/** Components */
import Button from '@/components/Button/Primary'
import Outline from '@/components/Button/Outline'
/** Context */
import { ClinicEditContext } from '../Context/ClinicEditContext'

interface GroupButtonsI {
  onUpdate: () => void
  onCancel: () => void
}

const GroupButtons: React.FC<GroupButtonsI> = ({ onUpdate, onCancel }) => {
  const {
    setIsDisabled,
    isDisabled,
    setIsHashModificationSelectAndMultSelect,
  } = React.useContext(ClinicEditContext)
  const onDisableFields = () => {
    setIsDisabled(false)
    setIsHashModificationSelectAndMultSelect(true)
  }

  return (
    <Container>
      {isDisabled && <Button onClick={onDisableFields}>Editar</Button>}
      {!isDisabled && (
        <React.Fragment>
          <Outline onClick={onCancel}>Cancelar</Outline>
          <Button onClick={onUpdate}>Salvar</Button>
        </React.Fragment>
      )}
    </Container>
  )
}

export default GroupButtons
