import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import SelectComponent from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import {
  validateBirthdate,
  validateEmail,
  validateGender,
  validateName,
  validatePhone,
} from '../../helpers/validatorFields'

import { Container } from './styles'

export const GeneralDatas = ({
  personalDatas,
  setPersonalDatas,
  isEditing,
}) => {
  const [name, setName] = useState(personalDatas?.name || '')
  const [birthDate, setBirthDate] = useState(personalDatas?.birthDate || '')
  const [gender, setGender] = useState(personalDatas?.gender || '')
  const [email, setEmail] = useState(personalDatas?.email || '')
  const [phone, setPhone] = useState(personalDatas?.phone || '')

  const [errors, setErrors] = useState({})

  useEffect(() => {
    setPersonalDatas({
      name,
      birthDate,
      gender,
      phone,
      email,
      hasError: Object.values(errors).some((value) => value !== ''),
    })
  }, [name, birthDate, gender, phone, email, errors])

  useEffect(() => {
    setName(personalDatas?.name || '')
    setBirthDate(personalDatas?.birthDate || '')
    setGender(personalDatas?.gender || '')
    setEmail(personalDatas?.email || '')
    setPhone(personalDatas?.phone || '')
  }, [isEditing])

  return (
    <Container>
      <h1>Dados Gerais</h1>
      <InputText
        label="Nome:"
        value={name}
        setValue={setName}
        name="name"
        hasError={errors?.name}
        msgError={errors?.name}
        maxLength={100}
        onBlur={() => setErrors({ ...errors, name: validateName(name) })}
        onKeyUp={() => setErrors({ ...errors, name: validateName(name) })}
        onlyLetter
        disabled={!isEditing}
      />
      <section>
        <InputMask
          label="Data de Nascimento:"
          mask="99/99/9999"
          value={birthDate}
          setValue={setBirthDate}
          hasError={errors?.birthDate}
          msgError={errors?.birthDate}
          onBlur={() =>
            setErrors({ ...errors, birthDate: validateBirthdate(birthDate) })
          }
          onKeyUp={() =>
            setErrors({ ...errors, birthDate: validateBirthdate(birthDate) })
          }
          autoComplete="off"
          disabled={!isEditing}
        />
        <SelectComponent
          label="Gênero:"
          labelDefaultOption="Selecione"
          options={[
            { label: 'Masculino', value: 'M' },
            { label: 'Feminino', value: 'F' },
            { label: 'Outros', value: 'O' },
          ]}
          setValue={setGender}
          value={gender}
          hasError={errors?.gender}
          msgError={errors?.gender}
          onChange={(e) => {
            setGender(e.target.value)
            setErrors({ ...errors, gender: validateGender(gender) })
          }}
          onBlur={() =>
            setErrors({ ...errors, gender: validateGender(gender) })
          }
          onKeyUp={() =>
            setErrors({ ...errors, gender: validateGender(gender) })
          }
          disabled={!isEditing}
        />
        <InputText
          label="E-mail:"
          name="email"
          value={email}
          setValue={setEmail}
          hasError={errors?.email}
          msgError={errors?.email}
          onBlur={() => setErrors({ ...errors, email: validateEmail(email) })}
          onKeyUp={() => setErrors({ ...errors, email: validateEmail(email) })}
          maxLength={100}
          disabled={!isEditing}
        />
        <InputMask
          label="Celular:"
          mask="(99) 99999-9999"
          value={phone}
          setValue={setPhone}
          hasError={errors?.phone}
          msgError={errors?.phone}
          onBlur={() => setErrors({ ...errors, phone: validatePhone(phone) })}
          onKeyUp={() => setErrors({ ...errors, phone: validatePhone(phone) })}
          disabled={!isEditing}
        />
      </section>
    </Container>
  )
}
