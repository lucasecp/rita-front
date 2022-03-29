import InputText from '@/components/Form/InputText'
import { Select } from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import { ErrorsI } from '../types'
import { Container } from './style'
import { DataReceivedI } from '../types'

interface FormProps {
  setDataToApi: React.Dispatch<React.SetStateAction<DataReceivedI>>
  errors: ErrorsI
}

const Form: React.FC<FormProps> = ({ errors, setDataToApi }) => {
  const [code, setCode] = useState('')
  const [requireSubscription, setRequireSubscription] = useState('')
  const [description, setDescription] = useState('')

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
          { label: 'Sim', value: 1 },
          { label: 'Não', value: 0 },
        ]}
        hasError={!!errors.requireSubscription}
        msgError={errors.requireSubscription}
      />
    </Container>
  )
}

export default Form
