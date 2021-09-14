import Checkbox from '@/components/Form/Checkbox'
import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import Select from '@/components/Form/Select'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Container } from '../style'
import { BtnTerms } from './style'
import Modal from '@/components/Modal'
import Terms from './messages/Tems'
import ButtonPrimary from '@/components/Button/Primary'
import validateForm from '../../helpers/validator'

const RegistrationData = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [gender, setGender] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [phone, setPhone] = useState('')
  const [cpf, setCpf] = useState('')
  const [terms, setTerms] = useState(false)
  const [message, setMessage] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [errors, setErrors] = useState({})
  
  const dataIsEmptyOrNot = () =>
  name && email && gender && birthdate && phone && cpf && confirmEmail

  const openModal = (Message, rest) => {
    setShowModal(true)
    setMessage(
      <Message setShowModal={setShowModal} setTerms={setTerms} {...rest} />
      )
    }
  const labelTerms = (
    <>
      Li e aceito os
      <BtnTerms onClick={() => openModal(Terms)}>Termos de uso </BtnTerms> da
      plataforma Rita.
    </>
  )
  const handleSubmit = () =>{
    setErrors(validateForm({name,email,confirmEmail,cpf,terms,phone,gender,birthdate}))
    console.log(errors);
   }
   const handleKeyPress = ({target}) =>{
    setErrors(validateForm({[target.name]: target.value}))
   }

  return (
    <Container>
      <h1>Dados Cadastrais</h1>
      <Row>
        <Col md="12">
          <InputText
            label="Nome Completo*:"
            value={name}
            setValue={setName}
            hasError={errors.name || ''}
            name='name'
            onKeyPress={handleKeyPress}
          />
          {errors.name && <p>{errors.name}</p>}
        </Col>

        <Col md="6" className="mt-4">
          <InputText label="E-mail*:" name='email'
          hasError={errors.email} value={email}
          setValue={setEmail}
          />
           {errors.email && <p>{errors.email}</p>}
        </Col>

        <Col md="6" className="mt-4">
          <InputText label="Confirme seu e-mail*:"
            hasError={errors.confirmEmail}
            value={confirmEmail}
          setValue={setConfirmEmail}
       />
        {errors.confirmEmail && <p>{errors.confirmEmail}</p>}
        </Col>
        <Col md="6" className="mt-4">
          <Select
            label="Gênero*:"
            labeDefaultOption="selecione"
            options={['masculino', 'feminino']}
            setValue={setGender}
            hasError={errors.gender}
          />
           {errors.gender && <p>{errors.gender}</p>}
        </Col>
        <Col md="6" className="mt-4">
          <InputMask
            label="Data de Nascimento*:"
            mask="##/##/####"
            value={birthdate}
            setValue={setBirthdate}
            hasError={errors.birthdate}
          />
           {errors.birthdate && <p>{errors.birthdate}</p>}
        </Col>
        <Col md="6" className="mt-4">
          <InputMask
            label="Celular*:"
            mask="(##) #####-####"
            value={phone}
            setValue={setPhone}
            hasError={errors.phone}
          />
           {errors.phone && <p>{errors.phone}</p>}
        </Col>
        <Col md="6" className="mt-4">
          <InputMask
            label="CPF*:"
            mask="###.###.###-##"
            value={cpf}
            setValue={setCpf}
            hasError={errors.cpf}
            />
            {errors.cpf && <p>{errors.cpf}</p>}
        </Col>
        <Col md="12" className="mt-4">
          <Checkbox
            id="terms"
            label={labelTerms}
            hasError={errors.terms}
            setValue={setTerms}
          />
           {errors.terms && <p>{errors.terms}</p>}
        </Col>
      </Row>
      <ButtonPrimary disabled={!dataIsEmptyOrNot} onClick={handleSubmit}>Próxima Etapa</ButtonPrimary>
      <Modal show={showModal} onCloseModal={setShowModal}>
        {message}
      </Modal>
    </Container>
  )
}

export default RegistrationData
