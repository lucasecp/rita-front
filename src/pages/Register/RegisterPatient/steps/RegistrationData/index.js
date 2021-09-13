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
const RegistrationData = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [phone, setPhone] = useState('')
  const [cpf, setCpf] = useState('')
  const [terms, setTerms] = useState(false)
  const [message, setMessage] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const openModal = (Message, rest) => {
    setShowModal(true)
    setMessage(
      <Message setShowModal={setShowModal} setTerms={setTerms} {...rest} />
    )
  }

  const labelTerms = (
    <>
      {' '}
      Li e aceito os{' '}
      <BtnTerms onClick={() => openModal(Terms)}>Termos de uso </BtnTerms> da
      plataforma Rita.{' '}
    </>
  )
  return (
    <Container>
      <h1>Dados Cadastrais</h1>
      <Row>
        <Col md="12">
          <InputText label="Nome Completo:" value={name} setValue={setName} />
        </Col>
        <Col md="6" className="mt-4">
          <InputText label="E-mail:" value={email} setValue={setEmail} />
        </Col>
        <Col md="6" className="mt-4">
          <InputText label="Confirme seu e-mail:" />
        </Col>
        <Col md="6" className="mt-4">
          <Select
            label="Gênero:"
            labeDefaultOption="selecione"
            options={['masculino', 'feminino']}
            setValue={setGender}
          />
        </Col>
        <Col md="6" className="mt-4">
          <InputMask
            label="Data de Nascimento:"
            mask="##/##/####"
            value={birthdate}
            setValue={setBirthdate}
          />
        </Col>
        <Col md="6" className="mt-4">
          <InputMask
            label="Celular:"
            mask="(##) #####-####"
            value={phone}
            setValue={setPhone}
          />
        </Col>
        <Col md="6" className="mt-4">
          <InputMask
            label="CPF:"
            mask="###.###.###-##"
            value={cpf}
            setValue={setCpf}
          />
        </Col>
        <Col md="12" className="mt-4">
          <Checkbox
            id="terms"
            setValue={setTerms}
            checked={terms}
            label={labelTerms}
          />
        </Col>
      </Row>
      <Modal show={showModal} onCloseModal={setShowModal}>
        {message}
      </Modal>
    </Container>
  )
}

export default RegistrationData
