import React from 'react'
/** Components */
import Primary from '@/components/Button/Primary'
import { toast } from '@/styles/components/toastify'
/** Types */
import { DataToApiI, ValidationErrorFieldsI } from '../../Types'
/** Helpers */
import clearSpecialCharacters from '@/helpers/clearSpecialCharacters'
import { validateLengthField } from '../../Helpers'
/** Adapter */
import { toApiEdit } from '../../Adapters/toApi'
/** Services */
import apiAdmin from '@/services/apiAdmin'
import { useHistory, useLocation } from 'react-router'
import { CLINIC_SEE_ALL_USERS } from '@/routes/constants/namedRoutes/routes'

interface ButtonCadastrarProps {
  dataToApi: DataToApiI
  isEditing: boolean
  setErrors: React.Dispatch<React.SetStateAction<ValidationErrorFieldsI>>
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}

const ButtonSave: React.FC<ButtonCadastrarProps> = ({
  dataToApi,
  isEditing,
  setErrors,
  setIsEditing
}) => {

  const history = useHistory()
  const location = useLocation<{ idClinica: Number, idUsuario: Number }>()

  const clearSpecialCharactesCPFAndPhone = (dataToApi: DataToApiI) => {
    return {
      ...dataToApi,
      cpf: clearSpecialCharacters(dataToApi.cpf),
      phone: clearSpecialCharacters(dataToApi.phone),
    }
  }

  const onSave = async () => {
    dataToApi = clearSpecialCharactesCPFAndPhone(dataToApi)
    if (!validateLengthField(dataToApi, setErrors)) {
      await apiAdmin.put(`/clinica/${location.state.idClinica}/usuario/${location.state.idUsuario}`, toApiEdit(dataToApi))
      toast.success('Usuário atualizado com sucesso!')
      history.push(CLINIC_SEE_ALL_USERS)
    }
  }

  return (
    <Primary small onClick={onSave}>
      {isEditing ? 'Salvar' : 'Editar'}
    </Primary>
  )
}

export default ButtonSave
