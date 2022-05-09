import { Select } from '@/components/Form/Select'
import React, { useEffect, useState, useCallback } from 'react'
import { PatientStatusLimit } from '../../types'

import { Container } from './styles'

interface PersonStatusProps {
  patientStatus: PatientStatusLimit
  setpatientStatus: React.Dispatch<React.SetStateAction<PatientStatusLimit>>
  initialStatus: string
}

export const ResetStatusOnePatient: React.FC<PersonStatusProps> = ({
  patientStatus,
  setpatientStatus,
  initialStatus,
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
    if (initialStatus === 'A') {
      return [
        { label: 'Aprovado', value: 'A' },
        { label: 'Pendente', value: 'P' },
        { label: 'Inativo', value: 'I' },
      ]
    }
    if (initialStatus === 'N') {
      return [
        { label: 'Negado', value: 'N' },
        { label: 'Pendente', value: 'P' },
        { label: 'Inativo', value: 'I' },
      ]
    }
    if (initialStatus === 'P') {
      return [
        { label: 'Pendente', value: 'P' },
        { label: 'Inativo', value: 'I' },
      ]
    }
    if (initialStatus === 'EA') {
      return [
        { label: 'Inativo', value: 'I' },
        { label: 'Pendente', value: 'P' },
        { label: 'Em análise', value: 'EA' },
      ]
    }
    if (initialStatus === 'I') {
      return [
        { label: 'Inativo', value: 'I' },
        { label: 'Pendente', value: 'P' },
      ]
    }
    return []
  }
  const statusMemorized = useCallback(() => statusOptions(), [initialStatus])

  return (
    <Container>
      <Select
        label="Atualizar Status:"
        labelDefaultOption="Selecione:"
        options={statusMemorized()}
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
