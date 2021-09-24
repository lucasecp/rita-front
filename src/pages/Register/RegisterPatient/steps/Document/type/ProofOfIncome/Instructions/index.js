import React from 'react'

import { ReactComponent as WarningIcon } from '@/assets/icons/alerts/warning.svg'

import SelectComponent from '@/components/Form/Select'

import { Container } from './styles'
import BoxSendIncome from './BoxSendIncome'

function InstructionsIncome({ selectIncome, onGetSelectIncome, onGetFile }) {
  return (
    <Container>
      <header>
        <SelectComponent
          label="Renda:"
          labelDefaultOption="Selecione"
          options={[
            { label: 'Não possuo renda', value: 'not_income' },
            { label: 'Até 1 salário mínimo e meio', value: 'one_half' },
            {
              label: 'Acima de 1 salário mínimo e meio',
              value: 'more_one_half',
            },
          ]}
          setValue={onGetSelectIncome}
          value={selectIncome}
        />
      </header>
      <h6>A seleção da sua faixa de renda é obrigatória.</h6>
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
      {selectIncome !== '' && selectIncome !== 'more_one_half' && (
        <BoxSendIncome onGetFile={onGetFile} />
      )}
    </Container>
  )
}

export default InstructionsIncome
