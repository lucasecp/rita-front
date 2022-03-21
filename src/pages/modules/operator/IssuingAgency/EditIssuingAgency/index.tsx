import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useState, useEffect } from 'react'
import Form from './Form'
import { ErrorsI, DataReceivedI } from './types'
import ButtonPrimary from '@/components/Button/Primary'
import OutlineButton from '@/components/Button/Outline'
import apiAdmin from '@/services/apiAdmin'
import { useLoading } from '@/hooks/useLoading'
import { OPERATOR_SEE_ALL_ISSUING_AGENCY } from '@/routes/constants/namedRoutes/routes'
import { useHistory } from 'react-router'
import { toast } from '@/styles/components/toastify'
import { useModal } from '@/hooks/useModal'
import CancelCreating from './messages/CancelCreating'
import { Content } from './styles'
import { toApi } from './adapters'
import { useLocation } from 'react-router-dom'

const EditIssuingAengcy: React.FC = () => {
  const [errors, setErrors] = useState<ErrorsI>({})
  const [dataFromApi, setDataFromApi] = useState<any>({})
  const [someFieldsWasChanged, setSomeFieldsWasChanged] = useState(false)
  const [dataToApi, setSetDataToApi] = useState<DataReceivedI>({})
  const { Loading } = useLoading()
  const history = useHistory()
  const { showMessage } = useModal()
  const location = useLocation()

  const issuingInfo = location.state?.id

  useEffect(() => {
    if (!issuingInfo) {
      return history.push(OPERATOR_SEE_ALL_ISSUING_AGENCY)
    }
    setDataFromApi({
      code: issuingInfo.code,
      requireSubscription: issuingInfo.subscriptionRequired ? 1 : 0,
      description: issuingInfo.name,
    })
  }, [])

  useEffect(() => {
    for (const field in dataToApi) {
      if (dataToApi[field] !== dataFromApi[field]) {
        setSomeFieldsWasChanged(true)
        break
      } else {
        setSomeFieldsWasChanged(false)
      }
    }
  }, [dataToApi])

  const hasError = () => {
    let error = false
    setErrors({})

    for (const field in dataToApi) {
      if (!dataToApi[field] && dataToApi[field] !== 0) {
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

    const data = toApi({
      id: issuingInfo?.id,
      code: dataToApi.code,
      requireSubscription: !!Number(dataToApi.requireSubscription),
      description: dataToApi.description,
    })

    try {
      Loading.turnOn()

      await apiAdmin.put(`/especialidade/${issuingInfo?.id}`, data)

      toast.success('Cadastro realizado com sucesso.')
      history.push(OPERATOR_SEE_ALL_ISSUING_AGENCY)
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
    if (someFieldsWasChanged) {
      return showMessage(CancelCreating)
    }

    history.push(OPERATOR_SEE_ALL_ISSUING_AGENCY)
  }

  return (
    <DefaultLayout title="Órgão Emissor - Edição">
      <Content>
        <Form
          errors={errors}
          setDataToApi={setSetDataToApi}
          dataFromApi={dataFromApi}
        />
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

export default EditIssuingAengcy
