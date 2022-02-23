import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import React, { useEffect, useState } from 'react'
import { PersonalDatasI, ErrorsI } from '../../Types'
import {
  validateSocialReason,
  validateTwoPhone,
  validateName,
  validateCPF,
} from '../../helpers/validatorFields'
import { Container } from './styles'
import { InputEmail } from '../../../../../../../components/smarts/InputEmail/index'
import { useMessage } from '../../../../../../../hooks/useMessage'

interface PersonalDatasProps {
  personalDatas: PersonalDatasI
  setPersonalDatas: (value: any) => void
  errors: ErrorsI
  setErrors: (error: ErrorsI) => void
}

export const PersonalDatas: React.FC<PersonalDatasProps> = ({
  personalDatas,
  setPersonalDatas,
  errors,
  setErrors,
}) => {
  const [name, setName] = useState(personalDatas?.name || '')
  const [email, setEmail] = useState(personalDatas?.email || '')
  const [cpf, setCpf] = useState(personalDatas?.cpf || '')
  const [phone, setPhone] = useState(personalDatas?.phone || '')

  const [errorMessage, sendErrorMessage] = useMessage()

  useEffect(() => {
    setName(personalDatas?.name || '')
    setEmail(personalDatas?.email || '')
    setCpf(personalDatas?.cpf || '')
    setPhone(personalDatas?.phone || '')
  }, [personalDatas])

  useEffect(() => {
    setPersonalDatas({
      name,
      email,
      cpf,
      phone,
    })
  }, [name, email, cpf, phone, errors])

  return (
    <Container>
      <h1>Dados Pessoais do Especialista</h1>
      <section>
        <InputText
          label="Nome Completo:"
          value={name}
          setValue={setName}
          hasError={!!errors?.name}
          msgError={errors?.name}
          maxLength={100}
          onBlur={() => setErrors({ ...errors, name: validateName(name) })}
          onKeyUp={() => setErrors({ ...errors, name: validateName(name) })}
          name="name"
        />

        <InputEmail
          initialEmail={email}
          onGetEmail={setEmail}
          hasError={(hasError) => setErrors({ ...errors, email: hasError })}
          checkHasError={errorMessage}
          onKeyUp={sendErrorMessage}
          onBlur={sendErrorMessage}
        />

        <InputMask
          mask="999.999.999-99"
          label="CPF:"
          value={cpf}
          setValue={setCpf}
          hasError={!!errors?.cpf}
          msgError={errors?.cpf}
          onBlur={() =>
            setErrors({
              ...errors,
              cpf: validateCPF(cpf),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              cpf: validateCPF(cpf),
            })
          }
          name="cpf"
        />

        <InputMask
          label="Celular:"
          mask="(99) 99999-9999"
          value={phone}
          setValue={setPhone}
          hasError={!!errors?.phone}
          msgError={errors?.phone}
          onBlur={() =>
            setErrors({ ...errors, phone: validateTwoPhone(phone) })
          }
          onKeyUp={() =>
            setErrors({ ...errors, phone: validateTwoPhone(phone) })
          }
          name="phone"
        />
      </section>
    </Container>
  )
}
