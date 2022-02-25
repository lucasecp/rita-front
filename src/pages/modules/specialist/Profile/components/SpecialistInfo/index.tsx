import React, { useEffect, useState } from 'react'

import InputMask from '../../../../../../components/Form/InputMask'
import InputText from '../../../../../../components/Form/InputText'
import { Select } from '../../../../../../components/Form/Select'
import {
  validateClassCouncil,
  validateCPF,
  validateEmail,
  validateName,
  validatePhone,
  validateReceiveService,
} from '../../helpers/validatorFields'
import { ErrorsI, SpecialistInfoI } from '../../Types'
import SelectUf from './SelectUf'
import { Container } from './styles'

interface SpecialistInfoProps {
  data?: SpecialistInfoI
  isEditing?: boolean
  errors: ErrorsI
  setErrors: (error: any) => any
  setSpecialistInfo: (data: SpecialistInfoI) => any
  formWasSubmited: boolean
}

const SpecialistInfo: React.FC<SpecialistInfoProps> = ({
  data,
  isEditing,
  errors,
  setErrors,
  setSpecialistInfo,
  formWasSubmited,
}) => {
  const [name, setName] = useState('')
  const [profissionalName, setProfissionalName] = useState('')
  const [cpf, setCpf] = useState('')
  const [receiveService, setReceiveService] = useState<string>('')
  const [ufProfissionaRegister, setUfProfissionaRegister] = useState('')
  const [classCouncil, setClassCouncil] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    setSpecialistInfo({
      classCouncil,
      cpf,
      email,
      name,
      phone,
      profissionalName,
      ufProfissionaRegister,
      receiveService,
    })
  }, [
    classCouncil,
    cpf,
    email,
    name,
    phone,
    profissionalName,
    ufProfissionaRegister,
    receiveService,
  ])

  useEffect(() => {
    setName(data?.name || '')
    setProfissionalName(data?.profissionalName || '')
    setReceiveService(data?.receiveService || '')
    setUfProfissionaRegister(data?.ufProfissionaRegister || '')
    setClassCouncil(data?.classCouncil || '')
    setEmail(data?.email || '')
    setPhone(data?.phone || '')
    setCpf(data?.cpf || '')
  }, [data])

  useEffect(() => {
    if (!isEditing && !formWasSubmited) {
      setName(data?.name || '')
      setProfissionalName(data?.profissionalName || '')
      setReceiveService(data?.receiveService || '')
      setUfProfissionaRegister(data?.ufProfissionaRegister || '')
      setClassCouncil(data?.classCouncil || '')
      setEmail(data?.email || '')
      setPhone(data?.phone || '')
      setCpf(data?.cpf || '')
    } else {
      setName(name || '')
      setProfissionalName(profissionalName || '')
      setReceiveService(receiveService || '')
      setUfProfissionaRegister(ufProfissionaRegister || '')
      setClassCouncil(classCouncil || '')
      setEmail(email || '')
      setPhone(phone || '')
      setCpf(cpf || '')
    }
  }, [isEditing, formWasSubmited])

  return (
    <Container>
      <h3>Dados do Especialista</h3>
      <InputText
        label="Nome Completo:"
        value={name}
        setValue={setName}
        hasError={!!errors?.name}
        msgError={errors?.name}
        maxLength={100}
        onBlur={() => setErrors({ ...errors, name: validateName(name) })}
        onKeyUp={() => setErrors({ ...errors, name: validateName(name) })}
        disabled={!isEditing}
        name="name"
      />

      <InputText
        label="Nome Profissional:"
        value={profissionalName}
        setValue={setProfissionalName}
        hasError={!!errors?.profissionalName}
        msgError={errors?.profissionalName}
        maxLength={100}
        onBlur={() =>
          setErrors({
            ...errors,
            profissionalName: validateName(profissionalName),
          })
        }
        onKeyUp={() =>
          setErrors({
            ...errors,
            profissionalName: validateName(profissionalName),
          })
        }
        disabled={!isEditing}
        name="profissionalName"
      />

      <InputMask
        mask="999.999.999-99"
        label="CPF:"
        value={cpf}
        setValue={setCpf}
        hasError={!!errors?.cpf}
        msgError={errors?.cpf}
        onBlur={async () =>
          setErrors({
            ...errors,
            cpf: validateCPF(cpf),
          })
        }
        onKeyUp={async () =>
          setErrors({
            ...errors,
            cpf: validateCPF(cpf),
          })
        }
        disabled={!isEditing}
        name="cpf"
      />

      <Select
        label="Receber Agendamentos:"
        options={[
          { label: 'Sim', value: 'S' },
          { label: 'Não', value: 'N' },
        ]}
        value={receiveService}
        setValue={setReceiveService}
        name="receiveService"
        disabled={!isEditing}
        labelDefaultOption={isEditing ? 'Selecione:' : ' '}
        onBlur={() =>
          setErrors({
            ...errors,
            receiveService: validateReceiveService(receiveService),
          })
        }
        hasError={!!errors?.receiveService}
        msgError={errors?.receiveService}
      />
      <SelectUf
        ufProfissionaRegister={ufProfissionaRegister}
        setUfProfissionaRegister={setUfProfissionaRegister}
        disabled={!isEditing}
      />
      <InputText
        label="Conselho de classe:"
        value={classCouncil}
        setValue={setClassCouncil}
        hasError={!!errors?.classCouncil}
        msgError={errors?.classCouncil}
        maxLength={100}
        onBlur={() =>
          setErrors({
            ...errors,
            classCouncil: validateClassCouncil(classCouncil),
          })
        }
        onKeyUp={() =>
          setErrors({
            ...errors,
            classCouncil: validateClassCouncil(classCouncil),
          })
        }
        disabled={!isEditing}
        name="classCouncil"
      />
      <InputText
        label="Email:"
        value={email}
        setValue={setEmail}
        hasError={!!errors?.email}
        msgError={errors?.email}
        onBlur={() => setErrors({ ...errors, email: validateEmail(email) })}
        onKeyUp={() => setErrors({ ...errors, email: validateEmail(email) })}
        name="email"
        maxLength={100}
        disabled={!isEditing}
      />
      <InputMask
        mask="(99) 99999-9999"
        label="Celular:"
        value={phone}
        setValue={setPhone}
        hasError={!!errors?.phone}
        msgError={errors?.phone}
        onBlur={async () =>
          setErrors({
            ...errors,
            phone: validatePhone(phone),
          })
        }
        onKeyUp={async () =>
          setErrors({
            ...errors,
            phone: validatePhone(phone),
          })
        }
        disabled={!isEditing}
        name="phone"
      />
    </Container>
  )
}

export default SpecialistInfo
