import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import { Select } from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Container } from './styles'
import {
  // validateBirthdate,
  validateGender,
  validateName,
  validatePhone,
} from '../../../shared/helpers/validator'
import formatBirthdate from '@/helpers/formatDate'
import { useModal } from '@/hooks/useModal'
import { validateDepCpf } from './ValidateDepCpf'
import { useLoading } from '@/hooks/useLoading'
import clearCpf from '@/helpers/clearSpecialCharacters'
import apiPatient from '@/services/apiPatient'
import { validateBirthDependent } from '../helpers/validateBirthDependent'
import { useRegisterPatient } from '@/pages/Register/RegisterPatient/hooks'
import { InputEmail } from '@/components/smarts/InputEmail'
import { useMessage } from '@/hooks/useMessage'

const CpfAlreadyExistsError =
  'Este CPF já está cadastrado na plataforma Rita, por favor verifique os dados e preencha novamente.'

const Form = ({
  editDep,
  id,
  setAllDependents,
  allDependents,
  action,
  clientCpf,
}) => {
  const { closeModal } = useModal()
  const { Loading } = useLoading()
  const { initialRegisterData, setDependents } = useRegisterPatient()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [phone, setPhone] = useState('')
  const [cpf, setCpf] = useState('')
  const [errors, setErrors] = useState({})

  const [errorMessage, sendErrorMessage] = useMessage()

  const updateData = () => {
    setName(editDep.name || '')
    setEmail(editDep.email || '')
    setGender(editDep.gender || '')
    setBirthdate(formatBirthdate(editDep.birthdate) || '')
    setPhone(editDep.phone || '')
    setCpf(editDep.cpf || '')
  }

  useEffect(() => {
    updateData()
  }, [editDep])

  const dataBaseForm = {
    name,
    email,
    gender,
    birthdate,
    phone,
    cpf,
  }

  const verifyNewPatinet = () => {
    if (initialRegisterData?.registrationData?.id && action === 'edit') {
      return {
        ...initialRegisterData?.dependents[id],
        ...dataBaseForm,
      }
    }
    return dataBaseForm
  }

  const isValidData = () =>
    name &&
    email &&
    cpf &&
    birthdate &&
    gender &&
    phone &&
    !Object.values(errors).filter((err) => err).length

  const cpfAlreadyExistsApi = async () => {
    try {
      Loading.turnOn()

      await apiPatient.get(`/paciente/status?cpf=${clearCpf(cpf)}`)
      return true
    } catch ({ response }) {
      if (response.status === 404) return false
    } finally {
      Loading.turnOff()
    }
  }

  const hanldeSubmit = async () => {
    setErrors({})

    if (await cpfAlreadyExistsApi()) {
      return setErrors({
        ...errors,
        cpf: CpfAlreadyExistsError,
      })
    }
    const newDep = [{ ...verifyNewPatinet() }]
    setAllDependents((data) => [...data, ...newDep])
    setDependents((data) => [...data, ...newDep])
    closeModal()
  }

  const handleUpdate = async () => {
    setErrors({})
    if (
      (await cpfAlreadyExistsApi()) &&
      !initialRegisterData?.registrationData?.id
    ) {
      return setErrors({
        ...errors,
        cpf: CpfAlreadyExistsError,
      })
    }

    const depsUpdated = allDependents.map((dep, index) => {
      if (id === index) return { ...verifyNewPatinet() }
      return dep
    })

    setAllDependents(depsUpdated)
    setDependents(depsUpdated)
    closeModal()
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
            onlyLetter
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
                ...validateDepCpf(cpf, allDependents, clientCpf, action),
              })
            }
            onKeyUp={() =>
              setErrors({
                ...errors,
                ...validateDepCpf(cpf, allDependents, clientCpf, action),
              })
            }
            msgError={errors.cpf}
            disabled={action === 'edit'}
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
              setErrors({ ...errors, ...validateBirthDependent(birthdate) })
            }
            onKeyUp={() =>
              setErrors({ ...errors, ...validateBirthDependent(birthdate) })
            }
            msgError={errors.birthdate}
          />
        </Col>
        <Col md="6" className="mt-4">
          <Select
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
          <InputEmail
            initialEmail={email}
            onGetEmail={setEmail}
            hasError={(hasError) => setErrors({ ...errors, email: hasError })}
            checkHasError={errorMessage}
            onKeyUp={sendErrorMessage}
            onBlur={sendErrorMessage}
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
