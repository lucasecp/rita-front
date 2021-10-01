import React, { useState } from 'react'

import arrowDownOutlineIcon from '@/assets/icons/arrow-down-outline.svg'

import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask'
import SelectComponent from '@/components/Form/Select'

import { Container } from './styles'

function PersonExpandable({ title, personData }) {
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
          label="Nome Completo:"
          value={personData?.prop || ''}
          disabled
        />
        <InputMask
          label="CPF:"
          mask="999.999.999-99"
          value={personData?.prop || ''}
          disabled
        />
      </section>
      <section>
        <InputMask
          label="Data de Nascimento:"
          mask="99/99/9999"
          value={personData?.prop || ''}
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
          value={personData?.prop || ''}
          disabled
        />
        <InputMask
          label="Celular:"
          mask="(99) 99999-9999"
          value={personData?.prop || ''}
          disabled
        />
        <InputText label="E-mail:" value={personData?.prop || ''} disabled />
      </section>
    </Container>
  )
}

export default PersonExpandable
