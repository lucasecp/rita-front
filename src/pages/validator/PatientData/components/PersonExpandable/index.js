import React, { useState } from 'react'

import arrowDownOutlineIcon from '@/assets/icons/arrow-down-outline.svg'

import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask'
import SelectComponent from '@/components/Form/Select'

import { Container } from './styles'

function PersonExpandable({ title }) {
  const [expanded, setExpanded] = useState(false)

  const toogleExpanded = () => setExpanded(!expanded)

  return (
    <Container expanded={expanded}>
      <header>
        <h2>{title}</h2>
        <img src={arrowDownOutlineIcon} onClick={toogleExpanded} />
      </header>
      <section>
        <InputText
          label="Nome Completo*:"
          placeholder="Nome Completo"
          disabled
        />
        <InputMask
          label="CPF*:"
          placeholder="000.000.000-00"
          mask="999.999.999-99"
          disabled
        />
      </section>
      <section>
        <InputMask
          label="Data de Nascimento*:"
          placeholder="00/00/0000"
          mask="99/99/9999"
          disabled
        />
        <SelectComponent
          label="Gênero*:"
          labelDefaultOption="Selecione"
          options={[
            { label: 'Masculino', value: 'M' },
            { label: 'Feminino', value: 'F' },
            { label: 'Outros', value: 'O' },
          ]}
          disabled
        />
        <InputMask
          label="Celular*:"
          placeholder="(00) 00000-0000"
          mask="(99) 99999-9999"
          disabled
        />
        <InputText
          label="E-mail*:"
          placeholder="emaildotitular@mail.com"
          disabled
        />
      </section>
    </Container>
  )
}

export default PersonExpandable
