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
import formatBirthdate from '@/helpers/formatBirthdate'
import { useModal } from '@/context/useModal'
import clearSpecialCaracter from '@/helpers/clear/SpecialCaracteres'

const Form = ({ editDep, setAllDeps, allDeps, action, clientCpf }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [phone, setPhone] = useState('')
  const [cpf, setCpf] = useState('')
  const [errors, setErrors] = useState({})
  const { closeModal } = useModal()

  useEffect(() => {
    if (!cpfAlreadyExist()) return setErrors({ ...errors, alreadyExist: '' })
    return alreadyExistError()
  }, [cpf])

  useEffect(() => {
    console.log(editDep);
    setName(editDep.nome || '')
    setEmail(editDep.email || '')
    setGender(editDep.sexo || '')
    setBirthdate(formatBirthdate(editDep.dataNascimento) || '')
    setPhone(editDep.telefone || '')
    setCpf(editDep.cpf || '')
  }, [editDep])

  const isValidData = () =>
    name &&
    email &&
    cpf &&
    birthdate &&
    gender &&
    phone &&
    !Object.values(errors).filter((err) => err).length

  const cpfAlreadyExist = () => {
    const alreadyExist = allDeps.filter(
      (dep) => clearSpecialCaracter(dep.cpf) === clearSpecialCaracter(cpf)
    )
    return (
      clearSpecialCaracter(cpf) === clearSpecialCaracter(clientCpf) ||
      alreadyExist.length
    )
  }

  const hanldeSubmit = (e) => {
    e.preventDefault()
    const newDep = [
      {
        nome: name,
        email: email,
        sexo: gender,
        dataNascimento: birthdate,
        telefone: phone,
        cpf,
      },
    ]
    setAllDeps((data) => [...data, ...newDep])
    clearForm()
    closeModal()
  }
  const alreadyExistError = () => {
    setErrors({
      ...errors,
      alreadyExist: 'Dependente já existente com este CPF',
    })
  }

  const handleUpdate = () => {
    const valueUpdated = allDeps.map((dep) => {
      if (clearSpecialCaracter(dep.cpf) === clearSpecialCaracter(cpf))
      return {
        nome: name,
        email: email,
        sexo: gender,
        dataNascimento: birthdate,
        telefone: phone,
        cpf,
      }
      return dep
    })
    console.log(valueUpdated);
    setAllDeps(valueUpdated)
    clearForm()
    closeModal()
  }
  const clearForm = () => {
    setName('')
    setEmail('')
    setGender('')
    setBirthdate('')
    setPhone('')
    setCpf('')
    setErrors({})
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
            msgError={errors.name}
          />
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
            msgError={errors.cpf}
          />
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
            msgError={errors.birthdate}
          />
        </Col>
        <Col md="6" className="mt-4">
          <SelectComponent
            label="Gênero*:"
            labelDefaultOption="selecione"
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
            msgError={errors.gender}
          />
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
            msgError={errors.phone}
          />
        </Col>

        <Col md="6" className="mt-4">
          <InputText
            label="E-mail*:"
            value={email}
            setValue={setEmail}
            hasError={errors.email}
            onBlur={() => setErrors({ ...errors, ...validateEmail(email) })}
            onKeyUp={() => setErrors({ ...errors, ...validateEmail(email) })}
            msgError={errors.email}
          />
        </Col>
      </Row>
      <Row className="mt-5 ">
        <Col
          sm={6}
          className="justify-content-sm-end justify-content-center d-flex"
        >
          <OutlineButton
            variation="red"
            onClick={() => {
              setErrors({})
              closeModal()
            }}
          >
            Cancelar
          </OutlineButton>
        </Col>
        <Col
          sm={6}
          className="justify-content-center justify-content-sm-start d-flex mt-3 mt-sm-0"
        >
          {action === 'create' && (
            <ButtonPrimary disabled={!isValidData()} onClick={hanldeSubmit}>
              Salvar
            </ButtonPrimary>
          )}
          {action === 'edit' && (
            <ButtonPrimary disabled={!isValidData()} onClick={handleUpdate}>
              Atualizar
            </ButtonPrimary>
          )}
        </Col>
        {errors.alreadyExist && (
          <MsgError className="text-center mt-3">
            {errors.alreadyExist}
          </MsgError>
        )}
      </Row>
    </Container>
  )
}

export default Form
