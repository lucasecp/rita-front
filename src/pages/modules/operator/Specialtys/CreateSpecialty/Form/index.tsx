import InputText from '@/components/Form/InputText'
import { Select } from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import { ErrorsI } from '../types'
import { Container } from './style'
import { DataReceivedI } from '../types'
import SelectIssuingAgency from '@/components/smarts/SelectIssuingAgency/SelectIssuingAgency'

interface FormProps {
  setDataToApi: React.Dispatch<React.SetStateAction<DataReceivedI>>
  errors: ErrorsI
}

const Form: React.FC<FormProps> = ({ errors, setDataToApi }) => {
  const [code, setCode] = useState('')
  const [requireSubscription, setRequireSubscription] = useState('')
  const [description, setDescription] = useState('')
  const [issuingAgency, setIssuingAgency] = useState('')

  useEffect(() => {
    setDataToApi({
      code,
      requireSubscription,
      description,
      issuingAgency,
    })
  }, [code, requireSubscription, description, issuingAgency])

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
      <SelectIssuingAgency
        issuingAgency={issuingAgency}
        setIssuingAgency={setIssuingAgency}
      />
    </Container>
  )
}

export default Form
