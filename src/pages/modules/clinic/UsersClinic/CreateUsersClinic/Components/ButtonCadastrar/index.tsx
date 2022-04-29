import React from 'react'
/** Components */
import Primary from '@/components/Button/Primary'
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

interface ButtonCadastrarProps {
  dataToApi: DataToApiI
  setErrors: React.Dispatch<React.SetStateAction<ValidationErrorFieldsI>>
}

const ButtonCadastrar: React.FC<ButtonCadastrarProps> = ({
  dataToApi,
  setErrors,
}) => {
  const history = useHistory()
  const clearSpecialCharactesCPFAndPhone = (dataToApi: DataToApiI) => {
    return {
      ...dataToApi,
      cpf: clearSpecialCharacters(dataToApi.cpf),
      phone: clearSpecialCharacters(dataToApi.phone),
    }
  }

  const onSave = async () => {
    dataToApi = clearSpecialCharactesCPFAndPhone(dataToApi)
    if(!validateLengthField(dataToApi, setErrors)){
      console.log(dataToApi)
      await apiAdmin.post(`/clinica/${59}/usuario`, toApi(dataToApi))
      history.push(CLINIC_SEE_ALL_USERS)
    }
  }

  return (
    <Primary small onClick={onSave}>
      Cadastrar
    </Primary>
  )
}

export default ButtonCadastrar
