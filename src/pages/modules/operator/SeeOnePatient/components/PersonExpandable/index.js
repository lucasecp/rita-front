import React, { useEffect, useState } from 'react'
import { format, parseISO } from 'date-fns'

import arrowDownOutlineIcon from '@/assets/icons/arrow-down-outline.svg'

import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask'
import SelectComponent from '@/components/Form/Select'

import { Container } from './styles'

import {
  validateBirthdate,
  validateCpf,
  validateEmail,
  validateGender,
  validateName,
  validatePhone,
} from '../../helpers/validatorFields'

function PersonExpandable({
  title,
  allPersonData,
  personData,
  setPersonData,
  holder,
}) {
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

  const [errors, setErrors] = useState({})

  useEffect(() => {
    setPersonData({
      id: personData.idPaciente,
      name,
      cpf,
      birthDate,
      gender,
      phone,
      email,
      error: Object.values(errors).some((value) => value !== ''),
    })
  }, [name, cpf, birthDate, gender, phone, email, errors])

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
          value={name}
          setValue={setName}
          onBlur={() => setErrors({ ...errors, ...validateName(name) })}
          onKeyUp={() => setErrors({ ...errors, ...validateName(name) })}
          msgError={errors.name}
        />
        <InputMask
          label="CPF:"
          mask="999.999.999-99"
          value={cpf}
          setValue={setCpf}
          onBlur={() =>
            setErrors({ ...errors, ...validateCpf(cpf, allPersonData) })
          }
          onKeyUp={() =>
            setErrors({ ...errors, ...validateCpf(cpf, allPersonData) })
          }
          msgError={errors.cpf}
        />
      </section>
      <section>
        <InputMask
          label="Data de Nascimento:"
          mask="99/99/9999"
          value={birthDate}
          setValue={setBirthDate}
          onBlur={() =>
            setErrors({ ...errors, ...validateBirthdate(birthDate) })
          }
          onKeyUp={() =>
            setErrors({ ...errors, ...validateBirthdate(birthDate) })
          }
          msgError={errors.birthDate}
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
          onKeyUp={(e) => {
            setErrors({ ...errors, ...validateGender(e.target.value) })
          }}
          msgError={errors.gender}
        />
        <InputMask
          label="Celular:"
          mask="(99) 99999-9999"
          value={phone}
          setValue={setPhone}
          onBlur={() => setErrors({ ...errors, ...validatePhone(phone) })}
          onKeyUp={() => setErrors({ ...errors, ...validatePhone(phone) })}
          msgError={errors.phone}
        />
        <InputText
          label="E-mail:"
          value={email}
          setValue={setEmail}
          onBlur={() => setErrors({ ...errors, ...validateEmail(email) })}
          onKeyUp={() => setErrors({ ...errors, ...validateEmail(email) })}
          msgError={errors.email}
        />
      </section>
    </Container>
  )
}

export default PersonExpandable
