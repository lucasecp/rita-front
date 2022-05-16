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
import { toApi } from '../../Adapters/toApi'
/** Services */
import apiAdmin from '@/services/apiAdmin'
import { useHistory } from 'react-router'
import { CLINIC_SEE_ALL_USERS } from '@/routes/constants/namedRoutes/routes'
import { useLoading } from '@/hooks/useLoading'
import { useAuth } from '@/hooks/login'

interface ButtonCadastrarProps {
  dataToApi: DataToApiI
  erros: ValidationErrorFieldsI
  setErrors: React.Dispatch<React.SetStateAction<ValidationErrorFieldsI>>
  sendErrorMessage: () => void
}

const ButtonCadastrar: React.FC<ButtonCadastrarProps> = ({
  dataToApi,
  erros,
  setErrors,
  sendErrorMessage
}) => {
  const history = useHistory()
  const { Loading } = useLoading()
  const { user } = useAuth()
  const clearSpecialCharactesCPFAndPhone = (dataToApi: DataToApiI) => {
    return {
      ...dataToApi,
      cpf: clearSpecialCharacters(dataToApi.cpf),
      phone: clearSpecialCharacters(dataToApi.phone),
      phoneWithCaracters: dataToApi.phone
    }
  }

  const onSave = async () => {
    dataToApi = clearSpecialCharactesCPFAndPhone(dataToApi)
    sendErrorMessage()
    if(!validateLengthField(dataToApi, setErrors) && !erros.email){
      try {
        Loading.turnOn()
        await apiAdmin.post(
          `/clinica/${user.idClinica}/usuario`,
          toApi(dataToApi),
        )
        toast.success(`Usuário cadastrado com sucesso!
                       Link para redefinir a senha enviada no e-mail ${dataToApi.email}`)
        history.push(CLINIC_SEE_ALL_USERS)
      } catch (error) {
        toast.error('Não foi possível salvar as informações do novo usuário, entre em contato com o suporte técnico do sistema.')
      } finally {
        Loading.turnOff()
      }
    }
  }

  return (
    <Primary onClick={onSave}>
      Cadastrar
    </Primary>
  )
}

export default ButtonCadastrar
