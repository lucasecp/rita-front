import InputText from '@/components/Form/InputText'
import { Select } from '@/components/Form/Select'
import SelectIssuingAgency from '@/components/smarts/SelectIssuingAgency/SelectIssuingAgency'
import React, { useEffect, useState } from 'react'
import { ErrorsI, DataReceivedI } from '../types'
import { Container } from './style'

interface FormProps {
  setDataToApi: React.Dispatch<React.SetStateAction<DataReceivedI>>
  errors: ErrorsI
  dataFromApi: DataReceivedI
}

const Form: React.FC<FormProps> = ({ errors, setDataToApi, dataFromApi }) => {
  const [specialistName, setSpecialistName] = useState('')
  const [issuingAgency, setIssuingAgency] = useState('')
  const [status, setStatus] = useState('')

  console.log(dataFromApi)

  useEffect(() => {
    setSpecialistName(dataFromApi?.specialistName || '')
    setIssuingAgency(dataFromApi?.issuingAgency || '')
    setStatus(dataFromApi?.status || '')
  }, [dataFromApi])

  useEffect(() => {
    setDataToApi({
      specialistName,
      issuingAgency,
      status,
    })
  }, [specialistName, issuingAgency, status])

  return (
    <Container>
      <SelectIssuingAgency
        issuingAgency={issuingAgency}
        setIssuingAgency={setIssuingAgency}
        error={errors.issuingAgency}
      />
      <InputText
        label="Especialista:"
        value={specialistName}
        setValue={setSpecialistName}
        maxLength={100}
        hasError={!!errors.specialistName}
        msgError={errors.specialistName}
      />
      <Select
        options={[
          { label: 'Ativo', value: 'A' },
          { label: 'Inativo', value: 'I' },
        ]}
        label="Status:"
        labelDefaultOption="Selecione:"
        value={status}
        setValue={setStatus}
        hasError={!!errors.status}
        msgError={errors.status}
        name="Status"
      />
    </Container>
  )
}

export default Form
