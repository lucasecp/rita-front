import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import { ProfissionalDatasI, ErrorsI } from '../../Types'
import React, { useEffect, useState } from 'react'
import {
  validateAdminName,
  validateCPF,
  validatePhone,
} from '../../helpers/validatorFields'

import { Container } from './styles'
import { InputEmail } from '@/components/smarts/InputEmail'
import { useMessage } from '@/hooks/useMessage'
import SelectUf from '../SelectUf'

interface ProfissionalDatasProps {
  data: ProfissionalDatasI
  setData: (value: any) => void
  errors: ErrorsI
  setErrors: (error: ErrorsI) => void
}

export const ProfissionalDatas: React.FC<ProfissionalDatasProps> = ({
  data,
  setData,
  errors,
  setErrors,
}) => {
  const [profissionalName, setProfissionalName] = useState(
    data?.profissionalName || '',
  )
  const [registerNumber, setRegisterNumber] = useState(
    data?.registerNumber || '',
  )
  const [issuingAgency, setIssuingAgency] = useState(data?.issuingAgency || '')
  const [uf, setUf] = useState(data?.uf || '')
  const [ufToApi, setUfToApi] = useState('')

  const [errorMessage, sendErrorMessage] = useMessage()

  useEffect(() => {
    setProfissionalName(data?.profissionalName || '')
    setIssuingAgency(data?.issuingAgency || '')
    setUf(data?.uf || '')
    setRegisterNumber(data?.registerNumber || '')
  }, [data])

  useEffect(() => {
    setData({
      profissionalName,
      registerNumber,
      issuingAgency,
      celPhone: uf,
    })
  }, [profissionalName, registerNumber, uf, issuingAgency, errors])

  return (
    <Container>
      <h1>Dados Profissionais do Especialista</h1>
      <section>
        <InputText
          label="Nome Profissional:"
          value={profissionalName}
          setValue={setProfissionalName}
          name="profissionalName"
          hasError={!!errors?.profissionalName}
          msgError={errors?.profissionalName}
          maxLength={100}
          onBlur={() =>
            setErrors({
              ...errors,
              profissionalName: validateAdminName(profissionalName),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              profissionalName: validateAdminName(profissionalName),
            })
          }
          onlyLetter
        />
        <InputText
          label="Número de Registro:"
          value={registerNumber}
          setValue={setRegisterNumber}
          hasError={!!errors?.registerNumber}
          msgError={errors?.registerNumber}
          onBlur={() =>
            setErrors({
              ...errors,
              registerNumber: validateCPF(registerNumber),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              registerNumber: validateCPF(registerNumber),
            })
          }
          name="registerNumber"
        />

        <InputText
          label="Orgão Emissor:"
          value={issuingAgency}
          setValue={setIssuingAgency}
          hasError={!!errors?.issuingAgency}
          msgError={errors?.issuingAgency}
          onBlur={() =>
            setErrors({
              ...errors,
              issuingAgency: validatePhone(issuingAgency),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              issuingAgency: validatePhone(issuingAgency),
            })
          }
          name="issuingAgency"
          maxLength={10}
        />
        <SelectUf uf={uf} setUf={setUf} setUfToApi={setUfToApi} />
      </section>
    </Container>
  )
}
