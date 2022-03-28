import InputText from '@/components/Form/InputText'
import { Select } from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import { ErrorsI, DataReceivedI } from '../types'
import { Container } from './style'

interface FormProps {
  setDataToApi: React.Dispatch<React.SetStateAction<DataReceivedI>>
  errors: ErrorsI
  dataFromApi: DataReceivedI
}

const Form: React.FC<FormProps> = ({ errors, setDataToApi, dataFromApi }) => {
  const [code, setCode] = useState('')
  const [requireSubscription, setRequireSubscription] = useState<string >('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    setCode(dataFromApi?.code || '')
    setRequireSubscription(String(dataFromApi?.requireSubscription || ''))
    setDescription(dataFromApi?.description || '')
  }, [dataFromApi])

  useEffect(() => {
    setDataToApi({
      code,
      requireSubscription,
      description,
    })
  }, [code, requireSubscription, description])

  return (
    <Container>
      <InputText
        label="Código:"
        value={code}
        setValue={setCode}
        maxLength={20}
        hasError={!!errors.code}
        msgError={errors.code}
      />
      <InputText
        label="Especialidade:"
        value={description}
        setValue={setDescription}
        maxLength={200}
        hasError={!!errors.description}
        msgError={errors.description}
      />
      <Select
        labelDefaultOption="Selecione"
        label="Requer Inscrição:"
        value={requireSubscription}
        setValue={setRequireSubscription}
        options={[
          { label: 'Sim', value: 'yes' },
          { label: 'Não', value: 'no' },
        ]}
        hasError={!!errors.requireSubscription}
        msgError={errors.requireSubscription}
      />
    </Container>
  )
}

export default Form
