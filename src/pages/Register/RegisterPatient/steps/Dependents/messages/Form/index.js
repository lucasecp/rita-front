import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import SelectComponent from '@/components/Form/Select'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Container } from './style'
import {
  validateBirthdate,
  validateCpf,
  validateEmail,
  validateGender,
  validateName,
  validatePhone,
} from '../../../../helpers/validator'
import { MsgError } from '../../../style'
const Form = ({ onCloseModal }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [phone, setPhone] = useState('')
  const [cpf, setCpf] = useState('')
  const [errors, setErrors] = useState({});

  const hanldeSubmit = () =>{

  }
  return (
    <Container>
      <h2>Dependente</h2>
      <form method="POST" onSubmit={hanldeSubmit}>
        <Row>
          <Col md="6">
            <InputText label="Nome Completo:" value={name} setValue={setName}
              hasError={errors.name}
              onBlur={() => setErrors({ ...errors, ...validateName(name) })}
              onKeyUp={() => setErrors({ ...errors, ...validateName(name) })} />
            {errors.name && <MsgError>{errors.name}</MsgError>}
          </Col>
          <Col md="6" className="mt-4 mt-md-0">
            <InputMask
              label="CPF:"
              mask="###.###.###-##"
              value={cpf}
              setValue={setCpf}
              hasError={errors.cpf}
              onBlur={() => setErrors({ ...errors, ...validateCpf(cpf) })}
              onKeyUp={() => setErrors({ ...errors, ...validateCpf(cpf) })}
            />
          {errors.cpf && <MsgError>{errors.cpf}</MsgError>}
          </Col>
          <Col md="6" className="mt-4">
            <InputMask
              label="Data de Nascimento:"
              mask="##/##/####"
              value={birthdate}
              setValue={setBirthdate}
              hasError={errors.birthdate}
              onBlur={() => setErrors({ ...errors, ...validateBirthdate(birthdate) })}
              onKeyUp={() => setErrors({ ...errors, ...validateBirthdate(birthdate) })}
            />
              {errors.birthdate && <MsgError>{errors.birthdate}</MsgError>}
          </Col>
          <Col md="6" className="mt-4">
            <SelectComponent
              label="Gênero:"
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
              label="Celular:"
              mask="(##)#####-####"
              value={phone}
              setValue={setPhone}
              hasError={errors.phone}
              onBlur={() => setErrors({ ...errors, ...validatePhone(phone) })}
              onKeyUp={() => setErrors({ ...errors, ...validatePhone(phone) })}
            />
           {errors.phone && <MsgError>{errors.phone}</MsgError>}
          </Col>

          <Col md="6" className="mt-4">
            <InputText label="E-mail:" value={email} setValue={setEmail}
              hasError={errors.phone}
              onBlur={() => setErrors({ ...errors, ...validateEmail(phone) })}
              onKeyUp={() => setErrors({ ...errors, ...validateEmail(phone) })}
            />
          </Col>
        </Row>
        <Row className='mt-5 '>
          <Col sm={6} className='justify-content-sm-end justify-content-center d-flex'>
            <ButtonPrimary variation='red' onClick={()=>onCloseModal(false)}>Cancelar</ButtonPrimary>
          </Col>
          <Col sm={6} className='justify-content-center justify-content-sm-start d-flex mt-3 mt-sm-0'>
            <OutlineButton type='submit'>Salvar</OutlineButton>
          </Col>
        </Row>
      </form>
    </Container>
  )
}

export default Form
