import React, { useEffect, useState } from 'react'
import { Select } from '@/components/Form/Select'
import { InputEmail } from '@/components/smarts/InputEmail'
import { validateEmail, validateGender } from '../../helpers/validatorFields'

import { Container } from './styles'
import { formatPhone } from '@/helpers/formatPhone'
import { formatCpf } from '@/helpers/formatCpf'

export const DependentData = ({
  personalDatas,
  setPersonalDatasToSave,
  setAnyFieldsHasChanged,
  anyFieldsHasChanged,
  setPersonalDatasError,
  showErrors,
  personalDatasError,
}) => {
  const name = personalDatas?.name
  const cpf = formatCpf(personalDatas?.cpf)
  const birthDate = personalDatas?.birthdate
  const [gender, setGender] = useState(personalDatas?.gender || '')
  const [email, setEmail] = useState(personalDatas?.email || '')
  const phone = formatPhone(personalDatas?.phone)

  useEffect(() => {
    setGender(personalDatas?.gender || '')
    setEmail(personalDatas?.email || '')
  }, [personalDatas])

  useEffect(() => {
    setAnyFieldsHasChanged(anyFieldsHasChanged + 1)
  }, [gender, email])

  useEffect(() => {
    setPersonalDatasError({
      gender: validateGender(gender),
      email: validateEmail(email),
    })
  }, [gender, email])

  useEffect(() => {
    setPersonalDatasToSave({
      gender,
      email,
    })
  }, [gender, email])

  return (
    <Container>
      <h1>Dados Gerais</h1>
      <section>
        <div className="static-field">
          <label>Name:</label>
          <p>{name}</p>
        </div>
        <div className="static-field">
          <label>CPF:</label>
          <p>{cpf}</p>
        </div>
        <div className="static-field">
          <label>Data de Nascimento:</label>
          <p>{birthDate}</p>
        </div>
        <Select
          label="Gênero:"
          labelDefaultOption="Selecione"
          options={[
            { label: 'Masculino', value: 'M' },
            { label: 'Feminino', value: 'F' },
            { label: 'Outros', value: 'O' },
          ]}
          setValue={setGender}
          value={gender}
          hasError={showErrors && personalDatasError?.gender}
          msgError={showErrors && personalDatasError?.gender}
        />
        <div className="static-field">
          <label>Celular:</label>
          <p>{phone}</p>
        </div>

        <InputEmail
          initialEmail={email}
          onGetEmail={setEmail}
          hasError={showErrors && personalDatasError?.email}
          msgError={showErrors && personalDatasError?.email}
        />
      </section>
    </Container>
  )
}
