import InputText from '@/components/Form/InputText'
import { ProfissionalDatasI, ErrorsI } from '../../Types'
import React, { useEffect, useState } from 'react'
import {
  validateProfissionalName,
  validateRegisterNumber,
  validateIssuingAgency,
} from '../../helpers/validatorFields'

import { Container } from './styles'
import { useMessage } from '@/hooks/useMessage'
import SelectUf from '../SelectUf'
import SelectIssuingAgency from '../SelectIssuingAgency'

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
      uf: ufToApi
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
              profissionalName: validateProfissionalName(profissionalName),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              profissionalName: validateProfissionalName(profissionalName),
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
              registerNumber: validateRegisterNumber(registerNumber),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              registerNumber: validateRegisterNumber(registerNumber),
            })
          }
          name="registerNumber"
          maxLength={40}
        />

        <SelectIssuingAgency
          issuingAgency={issuingAgency}
          setIssuingAgency={setIssuingAgency}
          error={errors?.issuingAgency}
        />

        <SelectUf
          uf={uf}
          setUf={setUf}
          setUfToApi={setUfToApi}
          error={errors?.uf}
        />
      </section>
    </Container>
  )
}
