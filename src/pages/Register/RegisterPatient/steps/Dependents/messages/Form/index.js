import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import SelectComponent from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
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
import MsgError from '@/components/MsgError'
import formatBirthdate from '@/pages/Register/RegisterPatient/helpers/formatBirthdate'

const Form = ({ onCloseModal, editDep, setAllDeps,allDeps }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [phone, setPhone] = useState('')
  const [cpf, setCpf] = useState('')
  const [errors, setErrors] = useState({})
  useEffect(() => {
    setErrors({})
  }, []);
  useEffect(() => {
    if (!editDep) return
    setName(editDep.nome || '')
    setEmail(editDep.email || '')
    setGender(editDep.sexo || '')
    setBirthdate(formatBirthdate(editDep.dataNascimento) || '')
    setPhone(editDep.telefone || '')
    setCpf(editDep.cpf || '')
  }, [editDep])

  const dataIsEmptyOrNot = () =>
    name && email && cpf && birthdate && gender && phone && !Object.values(errors).filter((err) => err).length

  const depAlreadyExists = () => {
    const alreadyExist = allDeps.filter(dep=> dep.cpf.replace(/[^a-zA-Z0-9]/g,'') === cpf.replace(/[^a-zA-Z0-9]/g,''))
    return alreadyExist.length
  }
  const hanldeSubmit = (e) => {
    e.preventDefault()
    const dataObj = [
      {
        nome: name,
        email: email,
        sexo: gender,
        dataNascimento: birthdate,
        telefone: phone,
        cpf,
      },
    ]
    if(depAlreadyExists()) return setErrors({...errors,submit: 'Dependente já existente com este CPF'})
    setAllDeps((data) => [...data, ...dataObj])
    onCloseModal(false)
  }
  const handleUpdate = () =>{
    const valueUpdated = allDeps.map((dep,i)=> {
      if(dep.cpf !== cpf) return dep
      return{
      'nome': name,
      'email': email,
      'sexo': gender,
      'dataNascimento': birthdate,
      'telefone': phone.replace(/[^a-zA-Z0-9]/g, ''),
      'cpf': cpf.replace(/[^a-zA-Z0-9]/g, ''),
    }})
    setAllDeps(valueUpdated)
    onCloseModal(false)
  }
  return (
    <Container>
      <h2>Dependente</h2>
      <Row>
        <Col md="6">
          <InputText
            label="Nome Completo*:"
            value={name}
            setValue={setName}
            hasError={errors.name}
            onBlur={() => setErrors({ ...errors, ...validateName(name) })}
            onKeyUp={() => setErrors({ ...errors, ...validateName(name) })}
          />
          {errors.name && <MsgError>{errors.name}</MsgError>}
        </Col>
        <Col md="6" className="mt-4 mt-md-0">
          <InputMask
            label="CPF*:"
            mask="999.999.999-99"
            value={cpf}
            setValue={setCpf}
            hasError={errors.cpf}
            onBlur={() => setErrors({ ...errors, ...validateCpf(cpf) })}
            onKeyUp={() => setErrors({ ...errors, ...validateCpf(cpf) })}
            disabled={Object.keys(editDep).length}
          />
          {errors.cpf && <MsgError>{errors.cpf}</MsgError>}
        </Col>
        <Col md="6" className="mt-4">
          <InputMask
            label="Data de Nascimento*:"
            mask="99/99/9999"
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
          <SelectComponent
            label="Gênero*:"
            labeDefaultOption="selecione"
            options={[
              { label: 'Masculino', value: 'M' },
              { label: 'Feminino', value: 'F' },
              { label: 'Outros', value: 'O' },
            ]}
            setValue={setGender}
            hasError={errors.gender}
            onBlur={() => setErrors({ ...errors, ...validateGender(gender) })}
            value={gender}
            onChange={(e) => {
              setGender(e.target.value)
              setErrors({ ...errors, ...validateGender(e.target.value) })
            }}
          />
          {errors.gender && <MsgError>{errors.gender}</MsgError>}
        </Col>
        <Col md="6" className="mt-4">
          <InputMask
            label="Celular*:"
            mask="(99) 99999-9999"
            value={phone}
            setValue={setPhone}
            hasError={errors.phone}
            onBlur={() => setErrors({ ...errors, ...validatePhone(phone) })}
            onKeyUp={() => setErrors({ ...errors, ...validatePhone(phone) })}
          />
          {errors.phone && <MsgError>{errors.phone}</MsgError>}
        </Col>

        <Col md="6" className="mt-4">
          <InputText
            label="E-mail*:"
            value={email}
            setValue={setEmail}
            hasError={errors.email}
            onBlur={() => setErrors({ ...errors, ...validateEmail(email) })}
            onKeyUp={() => setErrors({ ...errors, ...validateEmail(email) })}
          />
          {errors.email && <MsgError>{errors.email}</MsgError>}
        </Col>
      </Row>
      <Row className="mt-5 ">
        <Col
          sm={6}
          className="justify-content-sm-end justify-content-center d-flex"
        >
          <OutlineButton variation="red" onClick={() => {setErrors({});onCloseModal(false)}}>
            Cancelar
          </OutlineButton>
        </Col>
        <Col
          sm={6}
          className="justify-content-center justify-content-sm-start d-flex mt-3 mt-sm-0"
          >
          {!Object.keys(editDep).length ? (
            <ButtonPrimary
            disabled={!dataIsEmptyOrNot()}
            onClick={hanldeSubmit}
            >
              Salvar
            </ButtonPrimary>
          ) : (
            <ButtonPrimary
            disabled={!dataIsEmptyOrNot()}
            onClick={handleUpdate}
            >Salvar</ButtonPrimary>
            )}
        </Col>
            {errors.submit && <MsgError className='text-center mt-3'>{errors.submit}</MsgError>}
      </Row>
    </Container>
  )
}

export default Form
