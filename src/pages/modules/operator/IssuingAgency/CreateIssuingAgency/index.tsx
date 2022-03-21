import OutlineButton from '@/components/Button/Outline';
import ButtonPrimary from '@/components/Button/Primary';
import { DefaultLayout } from '@/components/Layout/DefaultLayout';
import { useLoading } from '@/hooks/useLoading';
import { useModal } from '@/hooks/useModal';
import { OPERATOR_SEE_ALL_ISSUING_AGENCY } from '@/routes/constants/namedRoutes/routes';
import apiAdmin from '@/services/apiAdmin';
import { toast } from '@/styles/components/toastify';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { toApi } from './adapters';
import Form from './Form';
import CancelCreating from './messages/CancelCreating';
import { Content } from './styles';
import { DataReceivedI, ErrorsI } from './types';

const CreateIssuingAgency: React.FC = () => {
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

    const data = toApi({
      issuingAgency: dataToApi.issuingAgency,
      status: dataToApi.status,
      specialist: dataToApi.specialist,
    })

    try {
      Loading.turnOn()

      await apiAdmin.post('/orgao-emissor', data)

      toast.success('Cadastro realizado com sucesso.')
      history.push(OPERATOR_SEE_ALL_ISSUING_AGENCY)
    } catch (error: any) {
      if (error?.response?.status === 409) {
        toast.error(
          error?.response?.data?.message || 'Erro ao incluir um orgão emissor.',
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

    history.push(OPERATOR_SEE_ALL_ISSUING_AGENCY)
  }


  return (
    <DefaultLayout title="Orgão Emissor - Inclusão">
      <Content>
        <Form errors={errors} setDataToApi={setSetDataToApi} />
        <footer>
          <OutlineButton onClick={onCancel}>Cancelar</OutlineButton>
          <ButtonPrimary
            onClick={onSave}
            disabled={Object.values(dataToApi).some((field)=> !field)}
          >
            Salvar
          </ButtonPrimary>
        </footer>
      </Content>
    </DefaultLayout>
  )
}

export default CreateIssuingAgency
