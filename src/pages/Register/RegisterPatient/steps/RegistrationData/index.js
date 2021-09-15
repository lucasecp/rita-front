import Checkbox from '@/components/Form/Checkbox'
import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import Select from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Container, MsgError } from '../style'
import { BtnTerms } from './style'
import Modal from '@/components/Modal'
import Terms from './messages/Tems'
import {
  validateBirthdate,
  validateCpf,
  validateEmail,
  validateGender,
  validateName,
  validatePhone,
} from '../../helpers/validator'
import formatBirthdate from '../../helpers/formatBirthdate'
const setDefaultValue = (obj,key,defaultVal) =>{
    return obj[key] || defaultVal
}
const RegistrationData = ({ setData, setBtn,dataApi }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState(setDefaultValue(dataApi,'email',''))
  const [confirmEmail, setConfirmEmail] = useState(setDefaultValue(dataApi,'email',''))
  const [gender, setGender] = useState(setDefaultValue(dataApi,'sexo',''))
  const [birthdate, setBirthdate] = useState(setDefaultValue(dataApi,'dataNascimento',''))
  const [phone, setPhone] = useState(setDefaultValue(dataApi,'telefone',''))
  const [cpf, setCpf] = useState(setDefaultValue(dataApi,'cpf',''))

  const [terms, setTerms] = useState(false)
  const [message, setMessage] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const hasErrors = Object.values(errors).filter((err) => err).length
    if (
      name &&
      email &&
      cpf &&
      terms &&
      confirmEmail &&
      birthdate &&
      gender &&
      phone &&
      !hasErrors
    ) {
      const dataObj = {
        name,
        email,
        gender,
        birthdate,
        phone,
        cpf,
        confirmEmail,
        terms,
      }
      setBtn(true)
      setData(data => {return{ ...data, cadastro: dataObj }})
    }
    return () => {
      setBtn(false)
    }
  }, [name, email, cpf, terms, confirmEmail, birthdate, gender, phone])

  const openModal = (Message, rest) => {
    setShowModal(true)
    setMessage(
      <Message setShowModal={setShowModal} setTerms={setTerms} {...rest} />
    )
  }
  const validateConfEmail = () => {
    if (email !== confirmEmail)
      return {
        confirmEmail:
          'Os e-mails preenchidos estão diferentes, por favor verifique os campos E-mail e Confirme seu e-mail.',
      }
    return { confirmEmail: '' }
  }
  const validateTerms = () => {
    setTerms(!terms)
    if (terms)
      return setErrors({
        ...errors,
        terms: 'Por favor, aceite os termos para continuar.',
      })
    return setErrors({ ...errors, terms: false })
  }
  const labelTerms = (
    <>
      Li e aceito os
      <BtnTerms onClick={() => openModal(Terms)}>Termos de uso </BtnTerms> da
      plataforma Rita.
    </>
  )
  return (
    <Container>
      <h1>Dados Cadastrais</h1>
      <Row>
        <Col md="12">
          <InputText
            label="Nome Completo*:"
            value={name || dataApi.nome}
            setValue={setName}
            hasError={errors.name || ''}
            name="name"
            onBlur={() => setErrors({ ...errors, ...validateName(name) })}
            onKeyUp={() => setErrors({ ...errors, ...validateName(name) })}
          />
          {errors.name && <MsgError>{errors.name}</MsgError>}
        </Col>

        <Col md="6" className="mt-4">
          <InputText
            label="E-mail*:"
            name="email"
            hasError={errors.email}
            value={email}
            setValue={setEmail}
            onBlur={() => setErrors({ ...errors, ...validateEmail(email) })}
            onKeyUp={() => setErrors({ ...errors, ...validateEmail(email) })}
          />
          {errors.email && <MsgError>{errors.email}</MsgError>}
        </Col>

        <Col md="6" className="mt-4">
          <InputText
            label="Confirme seu e-mail*:"
            hasError={errors.confirmEmail}
            value={confirmEmail}
            setValue={setConfirmEmail}
            onBlur={() =>
              setErrors({ ...errors, ...validateConfEmail(confirmEmail) })
            }
            onKeyUp={() =>
              setErrors({ ...errors, ...validateConfEmail(confirmEmail) })
            }
          />
          {errors.confirmEmail && <MsgError>{errors.confirmEmail}</MsgError>}
        </Col>
        <Col md="6" className="mt-4">
          <Select
            label="Gênero*:"
            labeDefaultOption="selecione"
            options={['masculino', 'feminino']}
            setValue={setGender}
            hasError={errors.gender}
            onBlur={() => setErrors({ ...errors, ...validateGender(gender) })}
          />
          {errors.gender && <MsgError>{errors.gender}</MsgError>}
        </Col>
        <Col md="6" className="mt-4">
          <InputMask
            label="Data de Nascimento*:"
            mask="##/##/####"
            value={birthdate}
            setValue={setBirthdate}
            hasError={errors.birthdate}
            onBlur={() =>
              setErrors({ ...errors, ...validateBirthdate(birthdate) })
            }
            onKeyUp={() =>
              setErrors({ ...errors, ...validateBirthdate(birthdate) })
            }
          />
          {errors.birthdate && <MsgError>{errors.birthdate}</MsgError>}
        </Col>
        <Col md="6" className="mt-4">
          <InputMask
            label="Celular*:"
            mask="(##) #####-####"
            value={phone}
            setValue={setPhone}
            hasError={errors.phone}
            onBlur={() => setErrors({ ...errors, ...validatePhone(phone) })}
            onKeyUp={() => setErrors({ ...errors, ...validatePhone(phone) })}
          />

          {errors.phone && <MsgError>{errors.phone}</MsgError>}
        </Col>
        <Col md="6" className="mt-4">
          <InputMask
            label="CPF*:"
            mask="###.###.###-##"
            value={cpf}
            setValue={setCpf}
            hasError={errors.cpf}
            onBlur={() => setErrors({ ...errors, ...validateCpf(cpf) })}
            onKeyUp={() => setErrors({ ...errors, ...validateCpf(cpf) })}
            disabled={dataApi.email}
          />
          {errors.cpf && <MsgError>{errors.cpf}</MsgError>}
        </Col>
        <Col md="12" className="mt-4">
          <Checkbox
            id="terms"
            label={labelTerms}
            hasError={errors.terms}
            checked={terms}
            setValue={setTerms}
            onChange={() => validateTerms()}
          />
          {errors.terms && <MsgError>{errors.terms}</MsgError>}
        </Col>
      </Row>
      <Modal show={showModal} onCloseModal={setShowModal}>
        {message}
      </Modal>
    </Container>
  )
}

export default RegistrationData
