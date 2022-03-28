import React, { useEffect, useState } from 'react'

import arrowDownOutlineIcon from '@/assets/icons/arrow-down-outline.svg'

import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask'
import { Select } from '@/components/Form/Select'

import { Container } from './styles'

import {
  validateBirthdate,
  validateCpf,
  validateGender,
  validateName,
  validatePhone,
} from '../../helpers/validatorFields'
import { useToggle } from '@/hooks/useToggle'
// import formatDate from '@/helpers/formatDate'

import { Dependent } from '../../types/index'
import { useMessage } from '@/hooks/useMessage'
import { InputEmail } from '@/components/smarts/InputEmail'

interface DependentExpandableProps {
  title: string
  allDependents: any
  dependentData: Dependent
  setDependentData: any
  defaultExpanded?: boolean
}

export const DependentExpandable: React.FC<DependentExpandableProps> = ({
  title,
  allDependents,
  dependentData,
  setDependentData,
  defaultExpanded = false,
}) => {
  const [expanded, toggleExpanded] = useToggle(defaultExpanded)

  const [name, setName] = useState(dependentData.name || '')
  const [cpf, setCpf] = useState(dependentData.cpf || '')
  const [birthDate, setBirthDate] = useState(dependentData?.birthDate || '')
  const [gender, setGender] = useState(dependentData.gender || '')
  const [phone, setPhone] = useState(dependentData.phone || '')
  const [email, setEmail] = useState(dependentData.email || '')

  const [errors, setErrors] = useState({
    name: '',
    cpf: '',
    birthDate: '',
    gender: '',
    phone: '',
    email: false,
  })

  const [errorMessage, sendErrorMessage] = useMessage()

  useEffect(() => {
    setDependentData({
      id: dependentData.id,
      name,
      cpf,
      birthDate,
      gender,
      phone,
      email,
      error: Object.values(errors).some((value) => value),
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
            setErrors({ ...errors, ...validateCpf(cpf, allDependents) })
          }
          onKeyUp={() =>
            setErrors({ ...errors, ...validateCpf(cpf, allDependents) })
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
          onBlur={(e: React.ChangeEvent<HTMLSelectElement>) => {
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
        <InputEmail
          initialEmail={email}
          onGetEmail={setEmail}
          hasError={(hasError) => setErrors({ ...errors, email: hasError })}
          checkHasError={errorMessage}
          onKeyUp={sendErrorMessage}
          onBlur={sendErrorMessage}
        />
      </section>
    </Container>
  )
}
