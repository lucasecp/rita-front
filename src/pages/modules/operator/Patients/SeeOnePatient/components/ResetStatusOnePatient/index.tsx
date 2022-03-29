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

  return (
    <Container>
      <Select
        label="Atualizar Status:"
        labelDefaultOption="Selecione:"
        options={[
          { label: 'Pendente', value: 'P' },
          { label: 'Inativo', value: 'I' },
          { label: 'Em Analise', value: 'EA', disabled: true },
          { label: 'Aprovado', value: 'A', disabled: true },
          { label: 'Negado', value: 'N', disabled: true },
        ]}
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
