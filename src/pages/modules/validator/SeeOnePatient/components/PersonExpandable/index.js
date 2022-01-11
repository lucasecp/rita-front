import React, { useMemo } from 'react'
// import { format, parseISO } from 'date-fns'

import arrowDownOutlineIcon from '@/assets/icons/arrow-down-outline.svg'

import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask'
import { Select } from '@/components/Form/Select'

import { Container } from './styles'
import { useToggle } from '@/hooks/useToggle'
import { formatCpf } from '@/helpers/formatCpf'
import { formatPhone } from '@/helpers/formatPhone'

function PersonExpandable({ title, personData, holder }) {
  const [expanded, toggleExpanded] = useToggle(!!holder)

  const cpfFormatted = useMemo(() => {
    return formatCpf(personData?.cpf)
  }, [personData?.cpf])

  const genderFormatted = useMemo(() => {
    const genderOptions = {
      M: 'Masculino',
      F: 'Feminino',
      O: 'Outros',
    }

    return genderOptions[personData?.sexo]
  }, [personData?.sexo])

  const phoneFormatted = useMemo(() => {
    return formatPhone(personData?.telefone)
  }, [personData?.telefone])

  return (
    <Container expanded={expanded}>
      <header>
        <h2>{title}</h2>
        <img src={arrowDownOutlineIcon} onClick={toggleExpanded} />
      </header>
      <section>
        <div>
          <label>Nome Completo:</label>
          <p>{personData?.nome || ''}</p>
        </div>
        <div>
          <label>CPF:</label>
          <p>{cpfFormatted || ''}</p>
        </div>
      </section>
      <section>
        <div>
          <label>Data de Nascimento:</label>
          <p>{personData?.dataNascimento || ''}</p>
        </div>
        <div>
          <label>Gênero:</label>
          <p>{genderFormatted || ''}</p>
        </div>
        <div>
          <label>Celular:</label>
          <p>{phoneFormatted || ''}</p>
        </div>
        <div>
          <label>E-mail:</label>
          <p>{personData?.email || ''}</p>
        </div>
      </section>
    </Container>
  )
}

export default PersonExpandable
