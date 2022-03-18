import InputText from '@/components/Form/InputText'
import { ProfissionalDatasI, ErrorsI } from '../../Types'
import React, { useEffect, useState } from 'react'
import {
  validateProfissionalName,
  validateRegisterNumber,
} from '../../helpers/validatorFields'

import { Container } from './styles'
import { useMessage } from '@/hooks/useMessage'
import SelectUf from '../SelectUf'
import SelectIssuingAgency from '../SelectIssuingAgency'
import InputMask from '@/components/Form/InputMask'
import clearSpecialCaracter from '@/helpers/clear/SpecialCaracteres'
import { specialCharacters } from './specialCharacters'
import hasSpecialCaracter from '@/helpers/hasSpecialCaracter'

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

  const formatCashRate = (e: any, setValue: (x: string) => void) => {
    const value = e.target.value.split('')

    const formatedValue = value.reduce((ac: string[], val: string) => {
      const hasTwoSymbols = ac.includes(',') && val === ','

      if (hasTwoSymbols || (hasSpecialCaracter(val) && val !== ',')) {
        return ac
      }
      ac.push(val)
      return ac
    }, [])

    // if the last value is a comma
    if (formatedValue[formatedValue.length - 1] === ',') {
      return setValue(formatedValue.slice(0, -1) + '%')
    }

    // if the first value is a comma
    if (formatedValue[0] === ',') {
      return setValue('')
    }

    setValue(formatedValue.join('') + '%') 
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
      cashBack: Number(cashBack.slice(0, -1).replace(',', '.')),
      takeRate: Number(takeRate.slice(0, -1).replace(',', '.')),
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
        <InputText
          label="CashBack %:"
          value={cashBack}
          setValue={setCashBack}
          onBlur={(e) => formatCashRate(e, setCashBack)}
          hasError={!!errors?.cashBack}
          msgError={errors?.cashBack}
          name="cashBack"
        />
        <InputText
          label="TakeRate %:"
          value={takeRate}
          setValue={setTakeRate}
          onBlur={(e) => formatCashRate(e, setTakeRate)}
          hasError={!!errors?.takeRate}
          msgError={errors?.takeRate}
          name="takeRate"
        />
      </div>
    </Container>
  )
}
