import InputText from '@/components/Form/InputText'
import { Select } from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import { ErrorsI } from '../types'
import { Container } from './style'
import { DataReceivedI } from '../types';

interface FormProps {
  setDataToApi: React.Dispatch<React.SetStateAction<DataReceivedI>>
  errors: ErrorsI
}

const Form: React.FC<FormProps> = ({ errors, setDataToApi }) => {
  const [issuingAgency, setIssuingAgency] = useState('')
  const [status, setStatus] = useState('')
  const [specialist, setSpecialist] = useState('')

  useEffect(() => {
    setDataToApi({
      issuingAgency,
      status,
      specialist,
    })
  }, [issuingAgency, status, specialist])

  return (
    <Container>
      <InputText
        label="Orgão Emissor:"
        value={issuingAgency}
        setValue={setIssuingAgency}
        maxLength={20}
        hasError={!!errors.issuingAgency}
        msgError={errors.issuingAgency}
      />
      <InputText
        label="Especialista:"
        value={specialist}
        setValue={setSpecialist}
        maxLength={200}
        hasError={!!errors.specialist}
        msgError={errors.specialist}
      />
      <Select
        labelDefaultOption="Selecione"
        label="Status:"
        value={status}
        setValue={setStatus}
        options={[
          { label: 'Ativo', value: 'A' },
          { label: 'Inativo', value: 'I' },
        ]}
        hasError={!!errors.status}
        msgError={errors.status}
      />
    </Container>
  )
}

export default Form
