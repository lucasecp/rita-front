import React, { useEffect, useState } from 'react'
import { RadioGroup } from '@material-ui/core'

import CheckboxComponent from '@/components/Form/Checkbox'
import Textarea from '@/components/Form/Textarea'
import RadioButton from '@/styles/components/RadioButton'

import { Container } from './styles'
import getValidationsFromLocalStorage from '../../helpers/getValidationsFromLocalStorage'

import isObjectEmpty from '@/helpers/isEmpty'

function ValidationSeeOnePatient({
  patientId,
  validations,
  onChangeValidations,
}) {
  const [documentOk, setDocumentOk] = useState(validations.documentOk || '')

  const [resonDocumentNotOk, setResonDocumentNotOk] = useState(
    validations.resonDocumentNotOk || ''
  )

  const [incomeOk, setIncomeOk] = useState(validations.incomeOk || 'no')

  const [allDataVerified, setCheckAllData] = useState(
    validations.allDataVerified || false
  )

  return (
    <Container>
      <h1>Validação</h1>
      <h2>
        Os dados informados pelo usuário correspondem aos documentos
        apresentados?
      </h2>
      <RadioGroup aria-label="documentOk" name="documentOk" value={documentOk}>
        <RadioButton value="yes" label="Sim" checked={documentOk === 'yes'} />
        <RadioButton value="no" label="Não" checked={documentOk === 'no'} />
      </RadioGroup>
      {documentOk === 'no' && (
        <Textarea
          label="Descreva o motivo*:"
          rows="3"
          limit="2000"
          value={resonDocumentNotOk}
          setValue={setResonDocumentNotOk}
        />
      )}
      <h2>
        Paciente apresentou comprovante de renda válido com valor de até 1
        salário mínimo e meio?
      </h2>
      <RadioGroup aria-label="incomeOk" name="incomeOk" value={incomeOk}>
        <RadioButton value="yes" label="Sim" checked={incomeOk === 'yes'} />
        <RadioButton value="no" label="Não" checked={incomeOk === 'no'} />
      </RadioGroup>
      {documentOk === 'yes' && (
        <section>
          <CheckboxComponent
            id="terms"
            label="Atesto que verifiquei todos os dados preenchidos pelo usuário como dados reais."
            checked={allDataVerified}
            setValue={setCheckAllData}
            colorLight
          />
        </section>
      )}
    </Container>
  )
}

export default ValidationSeeOnePatient
