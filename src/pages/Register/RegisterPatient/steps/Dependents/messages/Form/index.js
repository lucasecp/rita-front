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
  validateEmail,
  validateGender,
  validateName,
  validatePhone,
} from '../../../../helpers/validator'
import formatBirthdate from '@/helpers/formatDate'
import { useModal } from '@/hooks/useModal'
import { validateDepCpf } from './ValidateDepCpf'
import { useLoading } from '@/hooks/useLoading'
import clearCpf from '@/helpers/clear/SpecialCaracteres'
import apiPatient from '@/services/apiPatient'

const CpfAlreadyExistsError = 'Este CPF já está cadastrado na plataforma Rita, por favor verifique os dados e preencha novamente.'

const Form = ({ editDep, id, setAllDeps, allDeps, action, clientCpf,dataClientSabin }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [phone, setPhone] = useState('')
  const [cpf, setCpf] = useState('')
  const [errors, setErrors] = useState({})
  const { closeModal } = useModal()
  const { Loading } = useLoading()

  useEffect(() => {
    updateData()
  }, [editDep])

  const verifyNewPatinet = () => {
    if(dataClientSabin?.idPaciente) {
      return {
        idPaciente: dataClientSabin.idPaciente,
        nome: name,
        email: email,
        sexo: gender,
        dataNascimento: birthdate,
        telefone: phone,
        cpf,
      }
    }
    return {
      nome: name,
      email: email,
      sexo: gender,
      dataNascimento: birthdate,
      telefone: phone,
      cpf,
    }
  }

  const updateData = () => {
    setName(editDep.nome || '')
    setEmail(editDep.email || '')
    setGender(editDep.sexo || '')
    setBirthdate(formatBirthdate(editDep.dataNascimento) || '')
    setPhone(editDep.telefone || '')
    setCpf(editDep.cpf || '')
  }

  const isValidData = () =>
    name &&
    email &&
    cpf &&
    birthdate &&
    gender &&
    phone &&
    !Object.values(errors).filter((err) => err).length

  const hanldeSubmit = async () => {
    setErrors({})
    if (await cpfAlreadyExistsApi()) {
      return setErrors({
        ...errors,
        cpf: CpfAlreadyExistsError,
      })
    }
    const newDep = [
      {...verifyNewPatinet()}
    ]
    setAllDeps((data) => [...data, ...newDep])
    closeModal()
  }

  const handleUpdate = async () => {
    setErrors({})
    console.log(await cpfAlreadyExistsApi())
    if (await cpfAlreadyExistsApi()) {
      return setErrors({
        ...errors,
        cpf: CpfAlreadyExistsError,
      })
    }

    const depsUpdated = allDeps.map((dep, index) => {
      if (id === index)
        return {...verifyNewPatinet()}
      return dep
    })
    setAllDeps(depsUpdated)
    closeModal()
  }

  const cpfAlreadyExistsApi = async () => {
    try {
      Loading.turnOn()

      await apiPatient.get(
        `/paciente/status?cpf=${clearCpf(cpf)}`
      )
      return true
    } catch ({ response }) {
      if(response.status === 404) return false
    } finally {
      Loading.turnOff()
    }
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
            maxLength={100}
          />
        </Col>
        <Col md="6" className="mt-4 mt-md-0">
          <InputMask
            label="CPF*:"
            mask="999.999.999-99"
            value={cpf}
            setValue={setCpf}
            hasError={errors.cpf}
            onBlur={() =>
              setErrors({
                ...errors,
                ...validateDepCpf(cpf, allDeps, clientCpf, action),
              })
            }
            onKeyUp={() =>
              setErrors({
                ...errors,
                ...validateDepCpf(cpf, allDeps, clientCpf, action),
              })
            }
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
            maxLength={100}
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
              updateData()
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
      </Row>
    </Container>
  )
}

export default Form
