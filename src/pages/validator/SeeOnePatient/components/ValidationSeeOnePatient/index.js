import React, { useState } from 'react'
import { RadioGroup } from '@material-ui/core'

import ButtonLink from '@/components/Button/Link'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import CheckboxComponent from '@/components/Form/Checkbox'
import Textarea from '@/components/Form/Textarea'
import RadioButton from '@/styles/components/RadioButton'

import { Container } from './styles'

function ValidationSeeOnePatient() {
  const [documentOk, setDocumentOk] = useState('')
  const [incomeOk, setIncomeOk] = useState('no')
  const [checkAllData, setCheckAllData] = useState(false)

  const onDocumentOkChange = (_, value) => {
    setDocumentOk(value)
  }

  const onIncomeOkChange = (_, value) => {
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
      {documentOk === 'no' && <Textarea label="Descreva o motivo*:" rows="3" />}
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
        <RadioButton value="yes" label="Sim" checked={incomeOk === 'yes'} />
        <RadioButton value="no" label="Não" checked={incomeOk === 'no'} />
      </RadioGroup>
      {documentOk === 'yes' && (
        <section>
          <CheckboxComponent
            id="terms"
            label="Atesto que verifiquei todos os dados preenchidos pelo usuário como dados reais."
            checked={checkAllData}
            setValue={setCheckAllData}
            colorLight
            hasError={!checkAllData}
            msgError={!checkAllData && 'A seleção do campo é obrigatória'}
          />
        </section>
      )}
      <footer>
        <ButtonLink>Voltar</ButtonLink>
        <OutlineButton>Salvar</OutlineButton>
        <ButtonPrimary disabled>Concluir</ButtonPrimary>
      </footer>
    </Container>
  )
}

export default ValidationSeeOnePatient
