import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { RegisterLayout } from '@/components/Layout/RegisterLayout'
import { Checkbox } from '@/components/Form/Checkbox'
import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import { Select } from '@/components/Form/Select'
import ButtonPrimary from '@/components/Button/Primary'
import { InputEmail } from '@/components/smarts/InputEmail'

import { ExitAndSteps } from '../shared/components/ExitAndSteps'

import { Terms } from './messages/Terms'

import { validateFullName } from '@/helpers/validateFields/validateFullName'
import { validateConfEmail } from '@/helpers/validateFields/validateConfEmail'
import { validateGender } from '@/helpers/validateFields/validateGender'
import { validateBirthDate } from '@/helpers/validateFields/validateBirthDate'
import { validatePhone } from '@/helpers/validateFields/validatePhone'
import { validateTermOfUse } from '@/helpers/validateFields/validateTermOfUse'

import { useModal } from '@/hooks/useModal'
import { useMessage } from '@/hooks/useMessage'
import { usePhysicalPersonRegister } from '../shared/hooks'

import { GeneralFieldsErrors } from './messages/GeneralFieldsErrors'

import { Container, ButtonLinkBlue } from './styles'
import { PHYSICAL_PERSON_REGISTER_ADDRESS } from '@/routes/constants/namedRoutes/routes'

export interface ErrorState {
  name?: string
  email?: boolean
  confirmEmail?: string
  gender?: string
  birthdate?: string
  phone?: string
  cpf?: string
  terms?: string
}

export const RegistrationData: React.FC = () => {
  const { registrationData, cpf } = usePhysicalPersonRegister()
  const { showMessage } = useModal()
  const history = useHistory()

  const [name, setName] = useState(registrationData.get.name || '')
  const [email, setEmail] = useState(registrationData.get.email || '')
  const [confirmEmail, setConfirmEmail] = useState(
    registrationData.get.email || '',
  )
  const [gender, setGender] = useState(registrationData.get.gender || '')
  const [birthdate, setBirthdate] = useState(
    registrationData.get.birthdate || '',
  )
  const [phone, setPhone] = useState(registrationData.get.phone || '')
  const [cpfState, setCpfState] = useState(cpf.get)
  const [terms, setTerms] = useState(false)
  const [errors, setErrors] = useState({} as ErrorState)

  const [errorMessage, sendErrorMessage] = useMessage()

  const checkConfirmEmail = () => {
    const previousErrorsAndErrorsInConfirmEmail = {
      ...errors,
      confirmEmail: validateConfEmail(email, confirmEmail),
    }

    setErrors(previousErrorsAndErrorsInConfirmEmail)
    sendErrorMessage()
  }

  const checkMinorAge = () => {
    const validated = validateBirthDate(birthdate)

    if (validated === 'O titular deve ser maior de 18 anos') {
      const pacientIsMinorAge = {
        ...errors,
        birthdate: validateBirthDate(birthdate),
      }

      setErrors(pacientIsMinorAge)
    } else {
      setErrors({
        ...errors,
        birthdate: '',
      })
    }
  }

  const onSeeTermsOfUse = () => {
    showMessage(Terms, { setTerms, setErrors }, true)
  }

  const onNextStep = () => {
    sendErrorMessage()

    const permit = {
      name: validateFullName(name),
      confirmEmail: validateConfEmail(email, confirmEmail),
      gender: validateGender(gender),
      birthdate: validateBirthDate(birthdate),
      phone: validatePhone(phone),
      terms: validateTermOfUse(terms),
    }

    setErrors(permit)

    const permitBirth =
      !permit.birthdate ||
      permit.birthdate === 'O titular deve ser maior de 18 anos'

    if (
      !permit.name &&
      !permit.gender &&
      permitBirth &&
      !permit.confirmEmail &&
      !permit.terms &&
      !permit.phone
    ) {
      registrationData.set({
        name,
        gender,
        birthdate,
        phone,
        email,
        cpf: cpfState,
      })

      history.push(PHYSICAL_PERSON_REGISTER_ADDRESS)
    } else {
      showMessage(GeneralFieldsErrors)
    }
  }

  return (
    <RegisterLayout>
      <Container>
        <ExitAndSteps currentStep={1} />
        <main>
          <h1 data-test="RegistrationDataTitle">Dados Cadastrais</h1>
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
            <InputEmail
              initialEmail={email}
              label="E-mail*:"
              onGetEmail={setEmail}
              hasError={(hasError) => setErrors({ ...errors, email: hasError })}
              checkHasError={errorMessage}
              onKeyUp={checkConfirmEmail}
              onBlur={sendErrorMessage}
              data-test="registrationDataEmailField"
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
              maxLength={100}
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
              value={cpfState}
              setValue={setCpfState}
              hasError={!!errors.cpf}
              disabled
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
            data-test="registrationDataTermsField"
          />
        </main>
        <footer>
          <ButtonPrimary onClick={onNextStep}>Próxima Etapa</ButtonPrimary>
        </footer>
      </Container>
    </RegisterLayout>
  )
}
