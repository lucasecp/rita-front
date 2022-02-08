import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useState } from 'react'
import Form from './Form'
import { ErrorsI, DataReceivedI } from './types'
import ButtonPrimary from '@/components/Button/Primary'
import OutlineButton from '@/components/Button/Outline'
import apiPatient from '@/services/apiPatient'
import { useLoading } from '@/hooks/useLoading'
import { OPERATOR_SEE_ALL_SPECIALTYS } from '@/routes/constants/namedRoutes/routes'
import { useHistory } from 'react-router'
import { toast } from '@/styles/components/toastify'
import { useModal } from '@/hooks/useModal'
import CancelCreating from './messages/CancelCreating'
import { Content } from './styles'
import { toApi } from './adapters'

const CreateSpecialty: React.FC = () => {
  const [errors, setErrors] = useState<ErrorsI>({})
  const [dataToApi, setSetDataToApi] = useState<DataReceivedI>({})
  const { Loading } = useLoading()
  const history = useHistory()
  const { showMessage } = useModal()

  const hasError = () => {
    let error = false
    setErrors({})

    for (const field in dataToApi) {
      if (!dataToApi[field]) {
        setErrors((errors) => ({ ...errors, [field]: 'Campo Obrigatório.' }))
        error = true
      }
    }
    return error
  }

  const onSave = async () => {
    if (hasError()) {
      return
    }
    const data = toApi(dataToApi)

    try {
      Loading.turnOn()
      await apiPatient.post('/especialidade', data)
      toast.success('Cadastro realizado com sucesso.')
      history.push(OPERATOR_SEE_ALL_SPECIALTYS)
    } catch (error) {
    } finally {
      Loading.turnOff()
    }
  }

  const onCancel = () => {
    if (Object.values(dataToApi).length) {
      return showMessage(CancelCreating)
    }

    history.push(OPERATOR_SEE_ALL_SPECIALTYS)
  }

  return (
    <DefaultLayout title="Especialidades - Inclusão">
      <Content>
        <Form errors={errors} setDataToApi={setSetDataToApi} />
        <footer>
          <OutlineButton onClick={onCancel}>Cancelar</OutlineButton>
          <ButtonPrimary onClick={onSave}>Salvar</ButtonPrimary>
        </footer>
      </Content>
    </DefaultLayout>
  )
}

export default CreateSpecialty
