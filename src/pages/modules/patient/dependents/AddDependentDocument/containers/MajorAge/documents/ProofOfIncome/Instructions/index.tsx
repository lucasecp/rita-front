import React from 'react'

import { ReactComponent as WarningIcon } from '@/assets/icons/alerts/warning.svg'

import { Select } from '@/components/Form/Select'
import { BoxSendIncome } from './BoxSendIncome'

import { Container } from './styles'
import { incomeType, incomeOptions } from '../../../constants/income'

interface InstructionsProofOfIncomeProps {
  onGetFile: React.Dispatch<React.SetStateAction<File | string>>
  selectIncome: string
  onGetSelectIncome: React.Dispatch<React.SetStateAction<string>>
  error: string
}

export const InstructionsProofOfIncome: React.FC<
  InstructionsProofOfIncomeProps
> = ({ selectIncome, onGetSelectIncome, onGetFile, error }) => {
  return (
    <Container>
      <header>
        <Select
          label="Escolha uma opção:"
          labelDefaultOption="Selecione"
          options={incomeOptions}
          setValue={onGetSelectIncome}
          value={selectIncome}
        />
      </header>
      {error && !selectIncome && <h6>{error}</h6>}
      {!selectIncome && (
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
            para ter acesso ao CADÚNICO. Lá no site do governo você consegue
            gerar o seu comprovante para incluir aqui no seu cadastro
          </small>
        </p>
      )}
      {selectIncome !== '' && selectIncome !== incomeType.MORE_ONE_HALF && (
        <BoxSendIncome onGetFile={onGetFile} />
      )}
    </Container>
  )
}
