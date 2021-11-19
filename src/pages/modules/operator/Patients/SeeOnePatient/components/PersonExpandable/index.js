import React, { useEffect, useState } from 'react'

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
import { useToggle } from '@/hooks/useToggle'
// import formatDate from '@/helpers/formatDate'

function PersonExpandable({
  title,
  allPersonData,
  personData,
  setPersonData,
  holder,
}) {
  const [expanded, toggleExpanded] = useToggle(!!holder)

  const [name, setName] = useState(personData.nome || '')
  const [cpf, setCpf] = useState(personData.cpf || '')
  const [birthDate, setBirthDate] = useState(personData?.dataNascimento || '')
  const [gender, setGender] = useState(personData.sexo || '')
  const [phone, setPhone] = useState(personData.telefone || '')
  const [email, setEmail] = useState(personData.email || '')

  const [errors, setErrors] = useState({})

  useEffect(() => {
    setPersonData({
      idPaciente: personData.idPaciente,
      name,
      cpf,
      birthDate,
      gender,
      phone,
      email,
      error: Object.values(errors).some((value) => value !== ''),
    })
  }, [name, cpf, birthDate, gender, phone, email, errors])

  return (
    <Container expanded={expanded}>
      <header>
        <h2>{title}</h2>
        <img src={arrowDownOutlineIcon} onClick={toggleExpanded} />
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
          disabled={holder}
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
