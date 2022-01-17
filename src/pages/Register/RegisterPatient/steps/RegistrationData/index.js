import React, { useEffect, useState } from 'react'
import Checkbox from '@/components/Form/Checkbox'
import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import { Select } from '@/components/Form/Select'
import { Container, BtnTerms, CustomBtn } from './styles'
import Terms from './messages/Tems'
import {
  validateBirthdate,
  validateEmail,
  validateGender,
  validateName,
  validatePhone,
} from '../../helpers/validator'
import { validateConfEmail, validateTerms } from './validateFields'
import { useModal } from '@/hooks/useModal'
import { BtnGroup } from '@/pages/modules/validator/AnalyzePatients/Filter/styles'
import FieldsErrorMessage from '../../messages/Error/FieldsErrorMessage'

const RegistrationData = ({ dataClientSabin, newData, setStep }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [gender, setGender] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [phone, setPhone] = useState('')
  const [cpf, setCpf] = useState('')
  const [terms, setTerms] = useState('')
  const [errors, setErrors] = useState({})

  const { showMessage } = useModal()

  useEffect(() => {
    setName(newData.nome || newData.nome || dataClientSabin.nome || '')
    setEmail(newData.email || dataClientSabin.email || '')
    setConfirmEmail(newData.email || dataClientSabin.email || '')
    setGender(newData.sexo || dataClientSabin.sexo || '')
    setBirthdate(newData.dataNascimento || dataClientSabin.dataNascimento || '')
    setPhone(newData.telefone || dataClientSabin.telefone || '')
    setCpf(newData.cpf || dataClientSabin.cpf || '')
  }, [dataClientSabin])

  const checkConfirmEmail = () => {
    const previousErrorsAndErrorsInConfirmEmail = {
      ...errors,
      ...validateConfEmail(email, confirmEmail),
    }

    setErrors(previousErrorsAndErrorsInConfirmEmail)
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

    if (
      !permit.name &&
      !permit.email &&
      !permit.gender &&
      !permit.birthdate &&
      !permit.terms &&
      !permit.phone
    ) {
      setStep(2)
    } else {
      showMessage(FieldsErrorMessage)
    }
  }

  const labelTerms = (
    <>
      Li e aceito os
      <BtnTerms
        onClick={() => showMessage(Terms, { setTerms, setErrors }, true)}
      >
        Termos de uso{' '}
      </BtnTerms>{' '}
      da plataforma Rita.
    </>
  )

  return (
    <>
      <Container>
        <h1>Dados Cadastrais</h1>
        <InputText
          label="Nome Completo*:"
          value={name}
          setValue={setName}
          hasError={errors.name}
          name="name"
          msgError={errors.name}
          maxLength={100}
          onlyLetter
        />
        <section>
          <InputText
            label="E-mail*:"
            name="email"
            hasError={errors.email}
            value={email}
            onKeyUp={checkConfirmEmail}
            setValue={setEmail}
            msgError={errors.email}
            maxLength={100}
          />
          <InputText
            autoComplete="off"
            label="Confirme seu e-mail*:"
            hasError={errors.confirmEmail}
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
            hasError={errors.birthdate}
            autoComplete="off"
            msgError={errors.birthdate}
          />
          <InputMask
            label="Celular*:"
            mask="(99) 99999-9999"
            value={phone}
            setValue={setPhone}
            hasError={errors.phone}
            msgError={errors.phone}
          />
          <InputMask
            label="CPF*:"
            mask="999.999.999-99"
            value={cpf}
            setValue={setCpf}
            hasError={errors.cpf}
            disabled={dataClientSabin.cpf}
            msgError={errors.cpf}
          />
        </section>
        <Checkbox
          id="terms"
          label={labelTerms}
          hasError={errors.terms}
          checked={terms}
          setValue={setTerms}
          msgError={errors.terms}
        />
        {/* {!hasPermitionToNext() && (
        <MsgError className="mt-3">Todos os campos são obrigatórios.</MsgError>
      )} */}
      </Container>
      <BtnGroup>
        <CustomBtn onClick={checkFields}>Próxima Etapa</CustomBtn>
      </BtnGroup>
    </>
  )
}

export default RegistrationData
