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
  const [specialistName, setSpecialistName] = useState('')
  const [issuingAgency, setIssuingAgency] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    setSpecialistName(dataFromApi?.specialistName || '')
    setIssuingAgency(dataFromApi?.issuingAgency || '')
    setDescription(dataFromApi?.description || '')
  }, [dataFromApi])

  useEffect(() => {
    setDataToApi({
      specialistName,
      issuingAgency,
      description,
    })
  }, [specialistName, issuingAgency, description])

  return (
    <Container>
      <InputText
        label="Nome do especialista:"
        value={specialistName}
        setValue={setSpecialistName}
        maxLength={200}
        hasError={!!errors.specialistName}
        msgError={errors.specialistName}
      />
      <InputText
        label="Especialidade:"
        value={description}
        setValue={setDescription}
        maxLength={200}
        hasError={!!errors.description}
        msgError={errors.description}
      />
      <SelectIssuingAgency
        labelDefaultOption="Selecione"
        label="Órgão Emissor:"
        value={issuingAgency}
        setValue={setIssuingAgency}
        options={[
          { label: 'Sim', value: 1 },
          { label: 'Não', value: 0 },
        ]}
        hasError={!!errors.issuingAgency}
        msgError={errors.issuingAgency}
      />
    </Container>
  )
}

export default Form
