import Checkbox from '@/components/Form/Checkbox';
import InputMask from '@/components/Form/InputMask';
import InputText from '@/components/Form/InputText';
import Select from '@/components/Form/Select';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import {Container} from '../style'
import { BtnTerms } from './style';
import Modal from '@/components/Modal'
import Terms from '../../messages/Tems';
const RegistrationData = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [terms, setTerms] = useState(false);
  const [message, setMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleOpenTerms = () =>{
    openModal(Terms)
  }
  const openModal = (Message) =>{
    setShowModal(true)
    setMessage(<Message setShowModal={setShowModal}/>)
  }

  const labelTerms = <> Li e aceito os <BtnTerms onClick={handleOpenTerms}>Termos de uso </BtnTerms> da plataforma Rita. </>
  return (
    <Container>
      <Row gap>
        <Col lg='12'>
          <InputText label='Nome Completo:' value={name} setValue={setName}/>
        </Col>
        <Col lg='6' className='mt-4'>
          <InputText label='E-mail:' placeholder='fulano.souza@email.com.br' value={email} setValue={setEmail}/>
        </Col>
        <Col lg='6' className='mt-4'>
          <InputText label='Confirme seu e-mail:' placeholder='fulano.souza@email.com.br'/>
        </Col>
        <Col lg='6' className='mt-4'>
          <Select label='Gênero:'
          labeDefaultOption='selecione' options={['masculino','feminino']} setValue={setGender} />
        </Col>
        <Col lg='6' className='mt-4'>
          <InputMask label='Data de Nascimento:' mask='##/##/####' placeholder='00/00/0000' value={birthdate} setValue={setBirthdate}/>
        </Col>
        <Col lg='6' className='mt-4'>
          <InputMask label='Celular:' mask='(##) #####-####' placeholder='(00) 00000-0000' value={phone} setValue={setPhone}/>
        </Col>
        <Col lg='6' className='mt-4'>
          <InputMask label='CPF:' mask='###.###.###-##' placeholder='000.000.000-00' value={cpf} setValue={setCpf}/>
        </Col>
        <Col lg='12' className='mt-4'>
          <Checkbox setValue={setTerms} checked={terms} label={labelTerms}/>
        </Col>
      </Row>
      <Modal show={showModal}>{message}</Modal>

    </Container>
  );
};

RegistrationData.propTypes = {};

export default RegistrationData;