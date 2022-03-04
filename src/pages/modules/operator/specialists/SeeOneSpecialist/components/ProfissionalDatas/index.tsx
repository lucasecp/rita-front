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
import InputMask from '@/components/Form/InputMask'
import clearSpecialCaracter from '@/helpers/clear/SpecialCaracteres'

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
  const [cashBack, setCashBack] = useState(data?.cashback || '')
  const [takeRate, setTakeRate] = useState(data?.takerate || '')

  useEffect(() => {
    setProfissionalName(data?.profissionalName || '')
    setIssuingAgency(data?.issuingAgency || '')
    setUf(data?.uf || '')
    setRegisterNumber(data?.registerNumber || '')
    setCashBack(data?.cashback || '')
    setTakeRate(data?.takerate || '')
  }, [data])

  useEffect(() => {
    setData({
      profissionalName,
      registerNumber,
      issuingAgency,
      uf: ufToApi,
      cashBack: Number(clearSpecialCaracter(cashBack)),
      takeRate: Number(clearSpecialCaracter(takeRate)),
    })
  }, [
    profissionalName,
    registerNumber,
    uf,
    issuingAgency,
    errors,
    cashBack,
    takeRate,
  ])

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
      <div>
        <InputMask
          label="CashBack:"
          value={cashBack}
          setValue={setCashBack}
          mask="999%"
        />
        <InputMask
          label="TakeRate:"
          value={takeRate}
          setValue={setTakeRate}
          mask="999%"
        />
      </div>
    </Container>
  )
}
