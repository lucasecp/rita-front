import React, { useEffect, useState } from 'react'

import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask'
import { Select } from '@/components/Form/Select'
import { InputEmail } from '@/components/smarts/InputEmail'

import { useMessage } from '@/hooks/useMessage'

import { validateFullName } from '@/helpers/validateFields/validateFullName'
import { validatePhone } from '@/helpers/validateFields/validatePhone'
import { validateCPF } from '@/helpers/validateFields/validateCPF'
import { validateBirthDate } from '@/helpers/validateFields/validateBirthDate'

import { DependentData } from '../../types/index'

import { Container, InputsArea } from './styles'
import apiPatient from '@/services/apiPatient'
import clearSpecialCaracter from '@/helpers/clear/SpecialCaracteres'

interface ErrorsState {
  name: string
  cpf: string
  gender: string
  birthDate: string
  email: boolean
  phone: string
}

interface UserInformationsProps {
  onGetAnyFieldsHasChanged: React.Dispatch<React.SetStateAction<boolean>>
  setDependentData: React.Dispatch<React.SetStateAction<DependentData>>
  checkHasError: number
  onGetHasError: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserInformations: React.FC<UserInformationsProps> = ({
  onGetAnyFieldsHasChanged,
  setDependentData,
  checkHasError,
  onGetHasError,
}) => {
  const [errorMessage, sendErrorMessage] = useMessage()

  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [gender, setGender] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [errors, setErrors] = useState({} as ErrorsState)

  const [changeTimes, setChangeTimes] = useState(0)
  const [alreadyExists, setAlreadyExists] = useState(false)

  useEffect(() => {
    const clearedCPF = clearSpecialCaracter(cpf)

    if (clearedCPF.length === 11) {
      apiPatient
        .get(`/paciente/status?cpf=${cpf}`)
        .then((response) => {
          if (response.data.status === 'CS') {
            setAlreadyExists(false)
          } else {
            setAlreadyExists(true)
          }
        })
        .catch((err) => {
          if (err.response.status === 404) {
            setAlreadyExists(false)
          }
        })
    }
  }, [cpf])

  const hasErrorFunction = (canSetError = false) => {
    const errorsTemporary = {
      ...errors,
      cpf: validateCPF(cpf, alreadyExists),
      name: validateFullName(name, 3),
      phone: validatePhone(phone, true),
      birthDate: validateBirthDate(birthDate),
    }

    const hasErrors = Object.values(errorsTemporary).some((value) => value)

    if (canSetError) {
      setErrors(errorsTemporary)
    }

    onGetHasError(hasErrors)
  }

  useEffect(() => {
    if (changeTimes >= 3) {
      onGetAnyFieldsHasChanged(true)
    }

    setChangeTimes(changeTimes + 1)

    hasErrorFunction()

    setDependentData({
      name,
      cpf,
      gender,
      birthDate,
      email,
      phone,
    })
  }, [name, cpf, gender, birthDate, email, phone, alreadyExists])

  useEffect(() => {
    if (checkHasError) {
      sendErrorMessage()
      hasErrorFunction(true)
    }
  }, [checkHasError])

  return (
    <Container>
      <h3>Dados cadastrais</h3>

      <InputsArea>
        <InputText
          label="Nome Completo: "
          value={name}
          setValue={setName}
          maxLength={100}
          hasError={!!errors.name}
          msgError={errors.name}
        />

        <section>
          <InputMask
            name="cpf"
            label="CPF*:"
            value={cpf}
            setValue={setCpf}
            mask="999.999.999-99"
            hasError={!!errors.cpf}
            msgError={errors.cpf}
          />
          <Select
            label="Gênero:"
            labelDefaultOption="Selecione"
            options={[
              { label: 'Masculino', value: 'M' },
              { label: 'Feminino', value: 'F' },
              { label: 'Outros', value: 'O' },
            ]}
            value={gender}
            setValue={setGender}
          />
          <InputMask
            label="Data de Nascimento:"
            mask="99/99/9999"
            value={birthDate}
            setValue={setBirthDate}
            hasError={!!errors.birthDate}
            msgError={errors.birthDate}
          />
        </section>
        <section>
          <InputEmail
            onGetEmail={setEmail}
            hasError={(hasError) => setErrors({ ...errors, email: hasError })}
            checkHasError={errorMessage}
          />
          <InputMask
            label="Celular:"
            mask="(99) 99999-9999"
            value={phone}
            setValue={setPhone}
            hasError={!!errors.phone}
            msgError={errors.phone}
          />
        </section>
      </InputsArea>
    </Container>
  )
}
