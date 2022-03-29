import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import React, { useEffect, useState } from 'react'
import { PersonalDatasI } from '../../Types'

import { Container } from './styles'

interface PersonalDatasProps {
  personalDatas: PersonalDatasI
}

export const PersonalDatas: React.FC<PersonalDatasProps> = ({
  personalDatas,
}) => {
  const [name, setName] = useState(personalDatas?.name || '')
  const [email, setEmail] = useState(personalDatas?.email || '')
  const [cpf, setCpf] = useState(personalDatas?.cpf || '')
  const [phone, setPhone] = useState(personalDatas?.phone || '')

  useEffect(() => {
    setName(personalDatas?.name || '')
    setEmail(personalDatas?.email || '')
    setCpf(personalDatas?.cpf || '')
    setPhone(personalDatas?.phone || '')
  }, [personalDatas])

  return (
    <Container>
      <h1>Dados Pessoais do Especialista</h1>
      <section>
        <InputText
          label="Nome Completo:"
          value={name}
          setValue={setName}
          disabled
        />

        <InputText label="Email:" value={email} setValue={setEmail} disabled />

        <InputMask
          mask="999.999.999-99"
          label="CPF:"
          value={cpf}
          setValue={setCpf}
          disabled
        />

        <InputMask
          label="Celular:"
          mask="(99) 99999-9999"
          value={phone}
          setValue={setPhone}
          disabled
        />
      </section>
    </Container>
  )
}
