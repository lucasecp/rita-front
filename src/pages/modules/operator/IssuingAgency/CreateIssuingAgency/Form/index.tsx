import InputText from '@/components/Form/InputText'
import { Select } from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import { ErrorsI, DataReceivedI } from '../types'
import { Container } from './style'

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
        label="Órgão Emissor:"
        value={issuingAgency}
        setValue={setIssuingAgency}
        maxLength={10}
        hasError={
          issuingAgency.length < 3 && issuingAgency ? !!errors.type : false
        }
        msgError={issuingAgency.length < 3 && issuingAgency ? errors.type : ''}
      />
      <InputText
        label="Tipo de especialista:"
        value={specialist}
        setValue={setSpecialist}
        maxLength={100}
        hasError={specialist.length < 3 && specialist ? !!errors.type : false}
        msgError={specialist.length < 3 && specialist ? errors.type : ''}
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
