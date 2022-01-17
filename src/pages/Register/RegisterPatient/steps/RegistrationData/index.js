import React, { useEffect, useState } from 'react'
import Checkbox from '@/components/Form/Checkbox'
import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import { Select } from '@/components/Form/Select'
import { Col, Row } from 'react-bootstrap'
import { Container } from '../style'
import { BtnTerms, CustomBtn } from './style'
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
      !permit.terms
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
        <Row>
          <Col md="12">
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
          </Col>
          <Col md="6" className="mt-4">
            <InputText
              label="E-mail*:"
              name="email"
              hasError={errors.email}
              value={email}
              setValue={setEmail}
              msgError={errors.email}
              maxLength={100}
            />
          </Col>
          <Col md="6" className="mt-4">
            <InputText
              autoComplete="off"
              label="Confirme seu e-mail*:"
              hasError={errors.confirmEmail}
              value={confirmEmail}
              setValue={setConfirmEmail}
              msgError={errors.confirmEmail}
              onPaste={(e) => e.preventDefault()}
            />
          </Col>
          <Col md="6" className="mt-4">
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
          </Col>
          <Col md="6" className="mt-4">
            <InputMask
              label="Data de Nascimento*:"
              mask="99/99/9999"
              value={birthdate}
              setValue={setBirthdate}
              hasError={errors.birthdate}
              autoComplete="off"
              msgError={errors.birthdate}
            />
          </Col>
          <Col md="6" className="mt-4">
            <InputMask
              label="Celular*:"
              mask="(99) 99999-9999"
              value={phone}
              setValue={setPhone}
              hasError={errors.phone}
              msgError={errors.phone}
            />
          </Col>
          <Col md="6" className="mt-4">
            <InputMask
              label="CPF*:"
              mask="999.999.999-99"
              value={cpf}
              setValue={setCpf}
              hasError={errors.cpf}
              disabled={dataClientSabin.cpf}
              msgError={errors.cpf}
            />
          </Col>
          <Col md="12" className="mt-4">
            <Checkbox
              id="terms"
              label={labelTerms}
              hasError={errors.terms}
              checked={terms}
              setValue={setTerms}
              msgError={errors.terms}
            />
          </Col>
        </Row>
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
