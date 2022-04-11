import React, { useEffect, useState } from 'react'
import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import { Select } from '@/components/Form/Select'

import { DependentDataType } from '../../types'
import { Container } from './styles'

type DependentDataProps = Pick<DependentDataType, 'personalDatas'>

export const DependentData: React.FC<DependentDataProps> = ({
  personalDatas,
}) => {
  const [name, setName] = useState(personalDatas?.name || '')
  const [cpf, setCpf] = useState(personalDatas?.cpf || '')
  const [birthDate, setBirthDate] = useState(personalDatas?.birthdate || '')
  const [gender, setGender] = useState(personalDatas?.gender || '')
  const [email, setEmail] = useState(personalDatas?.email || '')
  const [phone, setPhone] = useState(personalDatas?.phone || '')

  useEffect(() => {
    setName(personalDatas?.name || '')
    setBirthDate(personalDatas?.birthdate || '')
    setGender(personalDatas?.gender || '')
    setEmail(personalDatas?.email || '')
    setPhone(personalDatas?.phone || '')
    setCpf(personalDatas?.cpf || '')
  }, [personalDatas])

  return (
    <Container>
      <h1>Dados Gerais</h1>
      <section>
        <InputText label="Nome:" value={name} name="name" disabled />
        <InputMask
          label="CPF:"
          mask="999.999.999-99"
          value={cpf}
          name="cpf"
          disabled
        />
        <InputMask
          label="Data de Nascimento:"
          mask="99/99/9999"
          value={birthDate}
          disabled
        />
        <Select
          label="Gênero:"
          labelDefaultOption="Selecione"
          options={[
            { label: 'Masculino', value: 'M' },
            { label: 'Feminino', value: 'F' },
            { label: 'Outros', value: 'O' },
          ]}
          value={gender}
          disabled
        />
        <InputMask
          label="Celular:"
          mask="(99) 99999-9999"
          value={phone}
          disabled
        />

        <InputText label="Email:" name="e-mail" value={email} disabled />
      </section>
    </Container>
  )
}
