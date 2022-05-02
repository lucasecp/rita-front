import React from 'react'
/** Components */
import Outline from '@/components/Button/Outline'
import { useHistory } from 'react-router'
import { useModal } from '@/hooks/useModal'
import ModalConfirmation from '../../Messages/ModalConfirmation'
import { CLINIC_SEE_ALL_USERS } from '@/routes/constants/namedRoutes/routes'
import { DataToApiI } from '../../Types'

interface ButtonCadastrarProps {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
  dataToApi: DataToApiI,
  getUserClinicById: () => void
  setErrors: React.Dispatch<React.SetStateAction<DataToApiI>>
}

const ButtonCancel: React.FC<ButtonCadastrarProps> = ({
  setIsEditing,
  dataToApi,
  getUserClinicById,
  setErrors
}) => {

  const history = useHistory()
  const { showMessage } = useModal()

  const onCancel = async () => {
    const values = Object.values(dataToApi)
    if(values.filter(item => item.trim() !== '').length){
        showMessage(ModalConfirmation, { setIsEditing, getUserClinicById, setErrors })
    }else {
      history.push(CLINIC_SEE_ALL_USERS)
    }
  }

  return (
    <Outline small onClick={onCancel}>
      Cancelar
    </Outline>
  )
}

export default ButtonCancel
