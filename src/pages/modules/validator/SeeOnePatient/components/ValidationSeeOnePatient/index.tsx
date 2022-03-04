import React, { useEffect, useState } from 'react'
import { RadioGroup } from '@material-ui/core'

import { Checkbox } from '@/components/Form/Checkbox'
import Textarea from '@/components/Form/Textarea'
import RadioButton from '@/styles/components/RadioButton'

import { Container } from './styles'
import getValidationsFromLocalStorage from '../../helpers/getValidationsFromLocalStorage'

import { isObjectEmpty } from '@/helpers/isObjectEmpty'
import { PatientValidation } from '../../@types'

interface ValidationSeeOnePatientProps {
  patientId: number
  validations: PatientValidation
  isPatientLinkedPlan?: boolean
  onChangeValidations: React.Dispatch<React.SetStateAction<PatientValidation>>
}

export const ValidationSeeOnePatient: React.FC<
  ValidationSeeOnePatientProps
> = ({ patientId, validations, isPatientLinkedPlan, onChangeValidations }) => {
  const [documentOk, setDocumentOk] = useState(validations.documentOk || '')

  const [resonDocumentNotOk, setResonDocumentNotOk] = useState(
    validations.resonDocumentNotOk || '',
  )

  const [incomeOk, setIncomeOk] = useState(validations.incomeOk || 'no')

  const [allDataVerified, setCheckAllData] = useState(
    validations.allDataVerified || false,
  )

  useEffect(() => {
    const validationsStored = getValidationsFromLocalStorage(patientId)

    if (!isObjectEmpty(validationsStored)) {
      setDocumentOk(validationsStored.documentOk)
      setResonDocumentNotOk(validationsStored.resonDocumentNotOk)
      setIncomeOk(validationsStored.incomeOk)
      setCheckAllData(validationsStored.allDataVerified)
    }

    if (isPatientLinkedPlan) {
      setIncomeOk('yes')
    }
  }, [patientId])

  useEffect(() => {
    onChangeValidations({
      documentOk,
      resonDocumentNotOk,
      incomeOk,
      allDataVerified,
    })
  }, [documentOk, resonDocumentNotOk, incomeOk, allDataVerified])

  const onDocumentOkChange = (_: unknown, value: string) => {
    setDocumentOk(value)
  }

  const onIncomeOkChange = (_: unknown, value: string) => {
    setIncomeOk(value)
  }

  return (
    <Container>
      <h1>Validação</h1>
      <h2>
        Os dados informados pelo usuário correspondem aos documentos
        apresentados?
      </h2>
      <RadioGroup
        aria-label="documentOk"
        name="documentOk"
        value={documentOk}
        onChange={onDocumentOkChange}
      >
        <RadioButton value="yes" label="Sim" checked={documentOk === 'yes'} />
        <RadioButton value="no" label="Não" checked={documentOk === 'no'} />
      </RadioGroup>
      {!documentOk && <small>A seleção do campo é obrigatória</small>}
      {documentOk === 'no' && (
        <Textarea
          label="Descreva o motivo*:"
          rows={3}
          limit="2000"
          value={resonDocumentNotOk}
          setValue={setResonDocumentNotOk}
        />
      )}
      <h2>
        Paciente apresentou comprovante de renda válido com valor de até 1
        salário mínimo e meio?
      </h2>
      <RadioGroup
        aria-label="incomeOk"
        name="incomeOk"
        value={incomeOk}
        onChange={onIncomeOkChange}
      >
        <RadioButton
          value="yes"
          label="Sim"
          checked={incomeOk === 'yes'}
          disabled={isPatientLinkedPlan}
        />
        <RadioButton
          value="no"
          label="Não"
          checked={incomeOk === 'no'}
          disabled={isPatientLinkedPlan}
        />
      </RadioGroup>
      {documentOk === 'yes' && (
        <section>
          <Checkbox
            label="Atesto que verifiquei todos os dados preenchidos pelo usuário como dados reais."
            checked={allDataVerified}
            setValue={setCheckAllData}
            colorLight
            hasError={!allDataVerified}
            messageError={
              !allDataVerified ? 'A seleção do campo é obrigatória' : ''
            }
          />
        </section>
      )}
    </Container>
  )
}
