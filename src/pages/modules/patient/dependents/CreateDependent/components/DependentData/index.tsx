import React, { useEffect, useState } from 'react'

import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask'
import { Select } from '@/components/Form/Select'
import { InputEmail } from '@/components/smarts/InputEmail'

import { useMessage } from '@/hooks/useMessage'
import apiPatient from '@/services/apiPatient'

import { validateFullName } from '@/helpers/validateFields/validateFullName'
import { validatePhone } from '@/helpers/validateFields/validatePhone'
import { validateCPF } from '@/helpers/validateFields/validateCPF'
import { validateBirthDate } from '@/helpers/validateFields/validateBirthDate'
import { validateGender } from '@/helpers/validateFields/validateGender'
import clearSpecialCaracter from '@/helpers/clearSpecialCharacters'

import { DependentDataType } from '../../types/index'

import { Container, InputsArea } from './styles'

interface ErrorsState {
  name: string
  cpf: string
  gender: string
  birthDate: string
  email: boolean
  phone: string
}

interface DependentDataProps {
  onGetAnyFieldsHasChanged: React.Dispatch<React.SetStateAction<boolean>>
  setDependentData: React.Dispatch<React.SetStateAction<DependentDataType>>
  checkHasError: number
  onGetHasError: React.Dispatch<React.SetStateAction<boolean>>
}

export const DependentData: React.FC<DependentDataProps> = ({
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
  const [alreadyExistsCPF, setAlreadyExistsCPF] = useState(false)

  useEffect(() => {
    const verifyIfAlreadyExistsCPF = async () => {
      const clearedCPF = clearSpecialCaracter(cpf)

      if (clearedCPF.length === 11) {
        try {
          const response = await apiPatient.get(`/paciente/status?cpf=${cpf}`)

          if (response.data.status === 'CS') {
            setAlreadyExistsCPF(false)
          } else {
            setAlreadyExistsCPF(true)
          }
        } catch ({ response }) {
          if (response) {
            setAlreadyExistsCPF(false)
          }
        }
      }
    }

    verifyIfAlreadyExistsCPF()
  }, [cpf])

  const verifyErrorsInFields = (canSetError = false) => {
    const errorsTemporary = {
      ...errors,
      cpf: validateCPF(cpf, alreadyExistsCPF),
      name: validateFullName(name, 3),
      gender: validateGender(gender),
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

    verifyErrorsInFields()

    setDependentData({
      name,
      cpf,
      gender,
      birthDate,
      email,
      phone,
    })
  }, [name, cpf, gender, birthDate, email, phone, alreadyExistsCPF])

  useEffect(() => {
    if (checkHasError) {
      sendErrorMessage()
      verifyErrorsInFields(true)
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
          onBlur={() =>
            setErrors({ ...errors, name: validateFullName(name, 3) })
          }
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
            onBlur={() =>
              setErrors({ ...errors, cpf: validateCPF(cpf, alreadyExistsCPF) })
            }
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
            hasError={!!errors.gender}
            msgError={errors.gender}
          />
          <InputMask
            label="Data de Nascimento:"
            mask="99/99/9999"
            value={birthDate}
            setValue={setBirthDate}
            hasError={!!errors.birthDate}
            msgError={errors.birthDate}
            onBlur={() =>
              setErrors({ ...errors, birthDate: validateBirthDate(birthDate) })
            }
          />
        </section>
        <section>
          <InputEmail
            onGetEmail={setEmail}
            hasError={(hasError) => setErrors({ ...errors, email: hasError })}
            checkHasError={errorMessage}
            onBlur={sendErrorMessage}
          />
          <InputMask
            label="Celular:"
            mask="(99) 99999-9999"
            value={phone}
            setValue={setPhone}
            hasError={!!errors.phone}
            msgError={errors.phone}
            onBlur={() => setErrors({ ...errors, phone: validatePhone(phone) })}
          />
        </section>
      </InputsArea>
    </Container>
  )
}
