import React from 'react'

import { ReactComponent as WarningIcon } from '@/assets/icons/alerts/warning.svg'

import SelectComponent from '@/components/Form/Select'
import BoxSendIncome from './BoxSendIncome'

import { Container } from './styles'
import { incomeType, incomeOptions } from '../../../constants/income'

function InstructionsIncome({ selectIncome, onGetSelectIncome, onGetFile }) {
  return (
    <Container>
      <header>
        <SelectComponent
          label="Renda:"
          labelDefaultOption="Selecione"
          options={incomeOptions}
          setValue={onGetSelectIncome}
          value={selectIncome}
        />
      </header>
      {!selectIncome && <h6>A seleção da sua faixa de renda é obrigatória.</h6>}
      {selectIncome !== incomeType.MORE_ONE_HALF && (
        <p>
          <WarningIcon />
          <small>
            Você que não tem comprovante de renda,{' '}
            <a
              href="https://meucadunico.cidadania.gov.br/meu_cadunico/"
              target="_blank"
              rel="noreferrer"
            >
              clique aqui
            </a>{' '}
            para ter acesso ao CADÚNICO. Lá você poderá gerar o seu comprovante
            para concluir o cadastro.
          </small>
        </p>
      )}
      {selectIncome !== '' && selectIncome !== incomeType.MORE_ONE_HALF && (
        <BoxSendIncome onGetFile={onGetFile} />
      )}
    </Container>
  )
}

export default InstructionsIncome
