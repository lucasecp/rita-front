import InputText from '@/components/Form/InputText'
import { ProfissionalDatasI, ErrorsI } from '../../Types'
import React, { useEffect, useState } from 'react'
import {
  validateProfissionalName,
  validateRegisterNumber,
} from '../../helpers/validatorFields'

import { Container } from './styles'
import SelectUf from '../SelectUf'
import SelectIssuingAgency from '@/components/smarts/SelectIssuingAgency/SelectIssuingAgency'

import onlyNumbers from '@/helpers/clear/onlyNumbers'

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

  const convertMaskPercent = (
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    let newValue: number | string = onlyNumbers(value)
    newValue = newValue.replace(/([0-9]{2})$/g, ',$1')

    if (newValue.length > 6) {
      newValue = newValue.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')
    }

    setValue(newValue)

    if (newValue === 'NaN') {
      setValue('')
    }
  }

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
      cashBack: Number(String(cashBack).replace(',', '.')),
      takeRate: Number(String(takeRate).replace(',', '.')),
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
      <h1>Dados Profissionais</h1>
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
          label="Registro Profissional:"
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
        <InputText
          label="CashBack %:"
          value={cashBack}
          onChange={(e) => convertMaskPercent(e.target.value, setCashBack)}
          hasError={!!errors?.cashBack}
          msgError={errors?.cashBack}
          name="cashBack"
          maxLength={6}
        />
        <InputText
          label="TakeRate %:"
          value={takeRate}
          onChange={(e) => convertMaskPercent(e.target.value, setTakeRate)}
          hasError={!!errors?.takeRate}
          msgError={errors?.takeRate}
          name="takeRate"
          maxLength={6}
        />
      </div>
    </Container>
  )
}
