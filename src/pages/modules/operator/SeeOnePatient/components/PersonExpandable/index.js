import React, { useEffect, useState } from 'react'
import { format, parseISO } from 'date-fns'

import arrowDownOutlineIcon from '@/assets/icons/arrow-down-outline.svg'

import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask'
import SelectComponent from '@/components/Form/Select'

import { Container } from './styles'

function PersonExpandable({ title, personData, setPersonData, holder }) {
  const birthDateFormated =
    personData?.dataNascimento &&
    format(parseISO(personData?.dataNascimento), 'dd/MM/yyyy')

  const [expanded, setExpanded] = useState(!!holder)

  const [name, setName] = useState(personData.nome || '')
  const [cpf, setCpf] = useState(personData.cpf || '')
  const [birthDate, setBirthDate] = useState(birthDateFormated || '')
  const [gender, setGender] = useState(personData.sexo || '')
  const [phone, setPhone] = useState(personData.telefone || '')
  const [email, setEmail] = useState(personData.email || '')

  useEffect(() => {
    setPersonData({
      name,
      cpf,
      birthDate,
      gender,
      phone,
      email,
    })
  }, [name, cpf, birthDate, gender, phone, email])

  const toogleExpanded = () => setExpanded(!expanded)

  return (
    <Container expanded={expanded}>
      <header>
        <h2>{title}</h2>
        <img src={arrowDownOutlineIcon} onClick={toogleExpanded} />
      </header>
      <section>
        <InputText label="Nome Completo:" value={name} setValue={setName} />
        <InputMask
          label="CPF:"
          mask="999.999.999-99"
          value={cpf}
          setValue={setCpf}
        />
      </section>
      <section>
        <InputMask
          label="Data de Nascimento:"
          mask="99/99/9999"
          value={birthDate}
          setValue={setBirthDate}
        />
        <SelectComponent
          label="Gênero:"
          labelDefaultOption="Selecione"
          options={[
            { label: 'Masculino', value: 'M' },
            { label: 'Feminino', value: 'F' },
            { label: 'Outros', value: 'O' },
          ]}
          value={gender}
          setValue={setGender}
        />
        <InputMask
          label="Celular:"
          mask="(99) 99999-9999"
          value={phone}
          setValue={setPhone}
        />
        <InputText label="E-mail:" value={email} setValue={setEmail} />
      </section>
    </Container>
  )
}

export default PersonExpandable
