import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useState } from 'react'
import Form from './Form'
import { ErrorsI, DataReceivedI } from './types'
import ButtonPrimary from '@/components/Button/Primary'
import OutlineButton from '@/components/Button/Outline'
import apiAdmin from '@/services/apiAdmin'
import { useLoading } from '@/hooks/useLoading'
import { OPERATOR_SEE_ALL_SPECIALTYS } from '@/routes/constants/namedRoutes/routes'
import { useHistory } from 'react-router-dom'
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
      if (dataToApi[field].length < 3 && field === 'description') {
        setErrors((errors) => ({
          ...errors,
          [field]: 'Informe 3 caracteres ou mais.',
        }))
        error = true
      }
    }
    return error
  }

  const onSave = async () => {
    if (hasError()) {
      return
    }

    const data = toApi({
      code: dataToApi.code,
      requireSubscription: !!Number(dataToApi.requireSubscription),
      description: dataToApi.description,
      issuingAgency: dataToApi.issuingAgency,
    })

    try {
      Loading.turnOn()

      await apiAdmin.post('/especialidade', data)

      toast.success('Cadastro realizado com sucesso.')
      window.localStorage.removeItem('@Rita/specialty-filter')
      history.push(OPERATOR_SEE_ALL_SPECIALTYS)
    } catch (error: any) {
      if (error?.response?.status === 409) {
        toast.error(
          error?.response?.data?.message || 'Erro ao incluir especialidade.',
        )
      }
    } finally {
      Loading.turnOff()
    }
  }

  const onCancel = () => {
    const someFieldsWasChanged = Object.values(dataToApi).some((data) => data)

    if (someFieldsWasChanged) {
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
          <ButtonPrimary
            onClick={onSave}
            disabled={Object.values(dataToApi).some((field) => !field)}
          >
            Salvar
          </ButtonPrimary>
        </footer>
      </Content>
    </DefaultLayout>
  )
}

export default CreateSpecialty
