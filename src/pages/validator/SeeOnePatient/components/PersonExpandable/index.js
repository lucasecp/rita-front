import React, { useState } from 'react'
import { format, parseISO } from 'date-fns'

import arrowDownOutlineIcon from '@/assets/icons/arrow-down-outline.svg'

import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask'
import SelectComponent from '@/components/Form/Select'

import { Container } from './styles'

function PersonExpandable({ title, personData }) {
  const birthDate =
    personData?.dataNascimento &&
    format(parseISO(personData?.dataNascimento), 'dd/MM/yyyy')

  const [expanded, setExpanded] = useState(false)

  const toogleExpanded = () => setExpanded(!expanded)

  const isOldDigit = () => personData?.telefone?.length === 10

  return (
    <Container expanded={expanded}>
      <header>
        <h2>{title}</h2>
        <img src={arrowDownOutlineIcon} onClick={toogleExpanded} />
      </header>
      <section>
        <InputText
          label="Nome Completo:"
          value={personData?.nome || ''}
          disabled
        />
        <InputMask
          label="CPF:"
          mask="999.999.999-99"
          value={personData?.cpf || ''}
          disabled
        />
      </section>
      <section>
        <InputMask
          label="Data de Nascimento:"
          mask="99/99/9999"
          value={birthDate || ''}
          disabled
        />
        <SelectComponent
          label="Gênero:"
          labelDefaultOption="Selecione"
          options={[
            { label: 'Masculino', value: 'M' },
            { label: 'Feminino', value: 'F' },
            { label: 'Outros', value: 'O' },
          ]}
          value={personData?.sexo || ''}
          disabled
        />
        <InputMask
          label="Celular:"
          mask={isOldDigit() ? '(99) 9999-9999' : '(99) 99999-9999'}
          value={personData?.telefone || ''}
          disabled
        />
        <InputText label="E-mail:" value={personData?.email || ''} disabled />
      </section>
    </Container>
  )
}

export default PersonExpandable
