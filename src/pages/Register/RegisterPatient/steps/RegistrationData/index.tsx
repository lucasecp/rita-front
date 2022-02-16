import React, { useEffect, useState } from 'react'
import { Checkbox } from '@/components/Form/Checkbox'
import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import { Select } from '@/components/Form/Select'
import { Container, ButtonLinkBlue } from './styles'
import Terms from './messages/Terms'
import {
  validateBirthdate,
  validateEmail,
  validateGender,
  validateName,
  validatePhone,
} from '../shared/helpers/validator'
import { validateConfEmail, validateTerms } from './validateFields'
import { useModal } from '@/hooks/useModal'
import { GeneralFieldsErrors } from './messages/GeneralFieldsErrors'

import { useRegisterPatient } from '../../hooks'
import ButtonPrimary from '@/components/Button/Primary'

interface ErrorState {
  name?: string
  email?: string
  confirmEmail?: string
  gender?: string
  birthdate?: string
  phone?: string
  cpf?: string
  terms?: string
}

interface RegistrationDataProps {
  isActive: boolean
}

export const RegistrationData: React.FC<RegistrationDataProps> = ({
  isActive,
}) => {
  const { showMessage } = useModal()
  const { initialRegisterData, setRegistrationData, nextStep } =
    useRegisterPatient()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [gender, setGender] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [phone, setPhone] = useState('')
  const [cpf, setCpf] = useState('')
  const [terms, setTerms] = useState(false)
  const [errors, setErrors] = useState({} as ErrorState)

  useEffect(() => {
    setName(initialRegisterData?.registrationData?.name || '')
    setEmail(initialRegisterData?.registrationData?.email || '')
    setConfirmEmail(initialRegisterData?.registrationData?.email || '')
    setGender(initialRegisterData?.registrationData?.gender || '')
    setBirthdate(initialRegisterData?.registrationData?.birthdate || '')
    setPhone(initialRegisterData?.registrationData?.phone || '')
    setCpf(initialRegisterData?.registrationData?.cpf || '')
  }, [initialRegisterData])

  const checkConfirmEmail = () => {
    const previousErrorsAndErrorsInConfirmEmail = {
      ...errors,
      ...validateConfEmail(email, confirmEmail),
    }

    setErrors(previousErrorsAndErrorsInConfirmEmail)
  }

  const checkMinorAge = () => {
    const validated = validateBirthdate(birthdate)

    if (validated.birthdate === 'O titular deve ser maior de 18 anos') {
      const pacientIsMinorAge = {
        ...errors,
        ...validateBirthdate(birthdate),
      }

      setErrors(pacientIsMinorAge)
    } else {
      setErrors({
        ...errors,
        birthdate: '',
      })
    }
  }

  const checkFields = () => {
    const permit = {
      ...validateName(name),
      ...validateEmail(email, confirmEmail),
      ...validateConfEmail(email, confirmEmail),
      ...validateGender(gender),
      ...validateBirthdate(birthdate),
      ...validatePhone(phone),
      ...validateTerms(terms),
    }

    setErrors(permit)

    const permitBirth =
      !permit.birthdate ||
      permit.birthdate === 'O titular deve ser maior de 18 anos'

    if (
      !permit.name &&
      !permit.email &&
      !permit.gender &&
      permitBirth &&
      !permit.terms &&
      !permit.phone
    ) {
      setRegistrationData({
        name,
        gender,
        birthdate,
        phone,
        email,
        cpf,
      })
      nextStep()
    } else {
      showMessage(GeneralFieldsErrors)
    }
  }

  const onSeeTermsOfUse = () => {
    showMessage(Terms, { setTerms, setErrors }, true)
  }

  return (
    <Container active={isActive}>
      <div>
        <h1>Dados Cadastrais</h1>
        <InputText
          label="Nome Completo*:"
          value={name}
          setValue={setName}
          hasError={!!errors.name}
          name="name"
          msgError={errors.name}
          maxLength={100}
          onlyLetter
        />
        <section>
          <InputText
            label="E-mail*:"
            name="email"
            hasError={!!errors.email}
            value={email}
            onKeyUp={checkConfirmEmail}
            setValue={setEmail}
            msgError={errors.email}
            maxLength={100}
          />
          <InputText
            autoComplete="off"
            label="Confirme seu e-mail*:"
            hasError={!!errors.confirmEmail}
            onKeyUp={checkConfirmEmail}
            value={confirmEmail}
            setValue={setConfirmEmail}
            msgError={errors.confirmEmail}
            onPaste={(e) => e.preventDefault()}
          />
          <Select
            label="Gênero*:"
            labelDefaultOption="Selecione"
            options={[
              { label: 'Masculino', value: 'M' },
              { label: 'Feminino', value: 'F' },
              { label: 'Outros', value: 'O' },
            ]}
            setValue={setGender}
            hasError={errors.gender}
            value={gender}
            msgError={errors.gender}
          />
          <InputMask
            label="Data de Nascimento*:"
            mask="99/99/9999"
            value={birthdate}
            setValue={setBirthdate}
            hasError={!!errors.birthdate}
            autoComplete="off"
            msgError={errors.birthdate}
            onKeyUp={checkMinorAge}
          />
          <InputMask
            label="Celular*:"
            mask="(99) 99999-9999"
            value={phone}
            setValue={setPhone}
            hasError={!!errors.phone}
            msgError={errors.phone}
          />
          <InputMask
            label="CPF*:"
            mask="999.999.999-99"
            value={cpf}
            setValue={setCpf}
            hasError={!!errors.cpf}
            disabled={!!initialRegisterData?.registrationData?.cpf}
            msgError={errors.cpf}
          />
        </section>
        <Checkbox
          label={
            <>
              Li e aceito os
              <ButtonLinkBlue onClick={onSeeTermsOfUse}>
                Termos de uso
              </ButtonLinkBlue>
              da plataforma Rita.
            </>
          }
          hasError={!!errors.terms}
          checked={terms}
          setValue={setTerms}
          messageError={errors.terms}
        />
      </div>
      <footer>
        <ButtonPrimary onClick={checkFields}>Próxima Etapa</ButtonPrimary>
      </footer>
    </Container>
  )
}
