import React from 'react'
import { RadioGroup } from '@material-ui/core'

import { Checkbox } from '@/components/Form/Checkbox'
import Textarea from '@/components/Form/Textarea'
import RadioButton from '@/styles/components/RadioButton'

import { Container } from './styles'
import formatFirstLastName from '@/helpers/formatFirstLastName'
import { Validations } from '../../types/index'

interface ValidationSeeOnePatientProps {
  validations: Validations
}

export const ValidationSeeOnePatient: React.FC<
  ValidationSeeOnePatientProps
> = ({ validations }) => {
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
        value={validations.documentOk}
      >
        <RadioButton
          value="yes"
          label="Sim"
          checked={validations.documentOk === 'yes'}
          disabled
        />
        <RadioButton
          value="no"
          label="Não"
          checked={validations.documentOk === 'no'}
          disabled
        />
      </RadioGroup>
      {validations.documentOk === 'no' && (
        <Textarea
          label="Descreva o motivo*:"
          rows={3}
          limit="2000"
          value={validations.resonDocumentNotOk}
          setValue={() => {}}
          disabled
        />
      )}
      <h2>
        Paciente apresentou comprovante de renda válido com valor de até 1
        salário mínimo e meio?
      </h2>
      <RadioGroup
        aria-label="incomeOk"
        name="incomeOk"
        value={validations.incomeOk}
      >
        <RadioButton
          value="yes"
          label="Sim"
          checked={validations.incomeOk === 'yes'}
          disabled
        />
        <RadioButton
          value="no"
          label="Não"
          checked={validations.incomeOk === 'no'}
          disabled
        />
      </RadioGroup>
      {validations.documentOk === 'yes' && (
        <section>
          <Checkbox
            id="terms"
            label="Atesto que verifiquei todos os dados preenchidos pelo usuário como dados reais."
            checked={validations.documentOk === 'yes'}
            colorLight
            disabled
            setValue={() => {}}
            hasError={false}
            msgError=""
          />
        </section>
      )}
      <h6>
        Registro validado por{' '}
        <strong>{formatFirstLastName(validations.validatorName)}</strong> em{' '}
        {validations.dateAndHour} com status{' '}
        <strong>{validations.status === 'N' ? 'Negado.' : 'Aprovado.'}</strong>
        {validations.table && (
          <>
            <br />
            <br />
            Paciente associado à <strong>{validations.table}.</strong>
          </>
        )}
      </h6>
    </Container>
  )
}

export default ValidationSeeOnePatient
