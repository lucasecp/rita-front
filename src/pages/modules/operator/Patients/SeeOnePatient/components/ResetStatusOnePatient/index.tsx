import { Select } from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import { PatientStatusLimit } from '../../types'

import { Container } from './styles'

interface PersonStatusProps {
  patientStatus: PatientStatusLimit
  setpatientStatus: React.Dispatch<React.SetStateAction<PatientStatusLimit>>
}

export const ResetStatusOnePatient: React.FC<PersonStatusProps> = ({
  patientStatus,
  setpatientStatus,
}) => {
  const [status, setStatus] = useState(patientStatus.status)
  const [limitTry, setlimitTry] = useState(patientStatus.limitTry)

  useEffect(() => {
    setpatientStatus({
      status,
      limitTry,
    })
  }, [status, limitTry])

  useEffect(() => {
    setStatus(patientStatus.status)
    setlimitTry(patientStatus.limitTry)
  }, [patientStatus])

  const statusOptions = () => {
    if (status === 'A') {
      return [
        { label: 'Aprovado', value: 'A' },
        { label: 'Pendente', value: 'P' },
        { label: 'Inativo', value: 'I' },
      ]
    }
    if (status === 'N') {
      return [
        { label: 'Negado', value: 'N' },
        { label: 'Pendente', value: 'P' },
        { label: 'Inativo', value: 'I' },
      ]
    }
    if (status === 'P') {
      return [
        { label: 'Pendente', value: 'P' },
        { label: 'Inativo', value: 'I' },
      ]
    }
    if (status === 'I') {
      return [
        { label: 'Inativo', value: 'I' },
        { label: 'Pendente', value: 'P' },
      ]
    } else {
      return []
    }
  }

  return (
    <Container>
      <Select
        label="Atualizar Status:"
        labelDefaultOption="Selecione:"
        options={statusOptions()}
        setValue={setStatus}
        value={status}
        name="status"
      />

      <Select
        label="Limite de tentativas:"
        labelDefaultOption="Selecione:"
        options={[
          { label: 'Normal', value: 'L' },
          { label: 'Excedido', value: 'E', disabled: true },
        ]}
        setValue={setlimitTry}
        value={limitTry}
        name="status"
      />
    </Container>
  )
}

export default ResetStatusOnePatient
