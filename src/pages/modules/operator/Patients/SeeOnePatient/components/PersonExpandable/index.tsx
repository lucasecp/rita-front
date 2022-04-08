import React, { useEffect, useState } from 'react'

import arrowDownOutlineIcon from '@/assets/icons/arrow-down-outline.svg'

import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask'
import { Select } from '@/components/Form/Select'

import { Container } from './styles'

import {
  validateBirthdate,
  validateGender,
  validateName,
  validatePhone,
} from '../../helpers/validatorFields'
import { useToggle } from '@/hooks/useToggle'

import { PatientData } from '../../types/index'
import { useMessage } from '@/hooks/useMessage'
import { InputEmail } from '@/components/smarts/InputEmail'

interface PersonExpandableProps {
  title: string
  personData: PatientData
  setPersonData: React.Dispatch<React.SetStateAction<PatientData>>
  defaultExpanded?: boolean
  viewMode?: boolean
}

const PersonExpandable: React.FC<PersonExpandableProps> = ({
  title,
  personData,
  setPersonData,
  defaultExpanded = false,
  viewMode = false,
}) => {
  const [expanded, toggleExpanded] = useToggle(defaultExpanded)

  const [name, setName] = useState(personData.name)
  const [cpf, setCpf] = useState(personData.cpf)
  const [birthDate, setBirthDate] = useState(personData?.birthDate || '')
  const [gender, setGender] = useState(personData.gender)
  const [phone, setPhone] = useState(personData.phone)
  const [email, setEmail] = useState(personData.email)
  const [errorMessage, sendErrorMessage] = useMessage()

  const [errors, setErrors] = useState({
    name: '',
    birthDate: '',
    gender: '',
    phone: '',
    email: false,
  })

  useEffect(() => {
    setPersonData({
      id: personData.id,
      name,
      cpf: personData.cpf,
      birthDate,
      gender,
      phone,
      email,
      planName: personData.planName,
      tableName: personData.tableName,
      // @ts-ignore
      status: personData.status,
      // @ts-ignore
      limitTry: personData.limitTry,
      company: {
        corporateName: personData.company
          ? personData.company.corporateName
          : '-',
        cnpj: personData.company ? personData.company?.cnpj : '-',
      },
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
        {viewMode ? (
          <>
            <div className="static-field">
              <label>Nome:</label>
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
            <div className="static-field">
              <label>Gênero:</label>
              <p>{gender}</p>
            </div>
            <div className="static-field">
              <label>Celular:</label>
              <p>{phone}</p>
            </div>
            <div className="static-field">
              <label>E-mail:</label>
              <p>{email}</p>
            </div>
          </>
        ) : (
          <>
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
              <p>{cpf}</p>
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
          </>
        )}
      </section>
      <section>
        <div className="static-field">
          <label>Plano Contratado:</label>
          <p>{personData.planName}</p>
        </div>
        <div className="static-field">
          <label>Tabela:</label>
          <p>{personData.tableName}</p>
        </div>
        <div className="static-field">
          <label>Nome da Empresa:</label>
          <p>{personData.company?.corporateName}</p>
        </div>
        <div className="has-three-in-row">
          <div className="static-field">
            <label>CNPJ da empresa:</label>
            <p>{personData.company?.cnpj}</p>
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
