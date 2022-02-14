import React, { useEffect, useState } from 'react'

import arrowDownOutlineIcon from '@/assets/icons/arrow-down-outline.svg'

import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask'
import { Select } from '@/components/Form/Select'

import { formatCpf } from '@/helpers/formatCpf'

import { Container } from './styles'

import {
  validateBirthdate,
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
        <div className="static-field">
          <label>CPF:</label>
          <p>{formatCpf(cpf)}</p>
        </div>
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
        <Select
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
      <section>
        <div className="static-field">
          <label>Plano Contratado:</label>
          <p>-</p>
        </div>
        <div className="static-field">
          <label>Tabela:</label>
          <p>-</p>
        </div>
        <div className="static-field">
          <label>Nome da Empresa:</label>
          <p>-</p>
        </div>
        <div className="has-three-in-row">
          <div className="static-field">
            <label>CNPJ da empresa:</label>
            <p>-</p>
          </div>
          <div className="static-field">
            <label>Sigla da empresa:</label>
            <p>-</p>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default PersonExpandable
