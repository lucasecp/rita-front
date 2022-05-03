import React from 'react'
/** Components */
import Primary from '@/components/Button/Primary'
import { toast } from '@/styles/components/toastify'
/** Hooks */
import { useLoading } from '@/hooks/useLoading'
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
  erros: ValidationErrorFieldsI
  setErrors: React.Dispatch<React.SetStateAction<ValidationErrorFieldsI>>
  sendErrorMessage: () => void
}

const ButtonSave: React.FC<ButtonCadastrarProps> = ({
  dataToApi,
  erros,
  setErrors,
  sendErrorMessage
}) => {

  const history = useHistory()
  const { Loading } = useLoading()
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
    sendErrorMessage()
    if (!validateLengthField(dataToApi, setErrors) && !erros.email) {
      try {
        Loading.turnOn()
        await apiAdmin.put(`/clinica/${location.state.idClinica}/usuario/${location.state.idUsuario}`, toApiEdit(dataToApi))
        toast.success('Usuário atualizado com sucesso!')
        history.push(CLINIC_SEE_ALL_USERS)
      } catch (error) {
        toast.error('Não foi possível salvar as informações do novo usuário, entre em contato com o suporte técnico do sistema.')
      } finally {
        Loading.turnOff()
      }
    }
  }

  return (
    <Primary small onClick={onSave}>
      Salvar
    </Primary>
  )
}

export default ButtonSave
