import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText/index'
import SelectUf from '@/components/smarts/SelectUf'
import { scrollOntoFieldError } from '@/helpers/scrollOntoFieldError'
import { useMessage } from '@/hooks/useMessage'
import React, { useEffect, useState } from 'react'
import FooterNextStep from '../../components/FooterNextStep'
import Photo from '../../components/Photo'
import { genericValidate } from '../../helpers/validatorFields'
import { useRegisterClinic } from '../../hooks'
import { useValidator } from '../../hooks/useValidator'
import InputAutoCompleteAntd from './InputAutoCompleteAntd'
import { Container } from './styles'

const Address: React.FC = () => {
  const [cep, setCep] = useState('')

  const [number, setNumber] = useState('')

  const [fullAddress, setFullAddress] = useState('')

  const [complement, setComplement] = useState('')

  const [district, setDistrict] = useState('')

  const [city, setCity] = useState('')

  const [uf, setUf] = useState('')
  const [ufToApi, setUfToApi] = useState('')

  const [toggleClick, setToggleClick] = useState(0)

  const [, sendErrorMessage] = useMessage()
  const { step, nextStep, setAddress, errors, setErrors } = useRegisterClinic()
  const { hasErrors } = useValidator()

  const onNextStep = () => {
    sendErrorMessage()
    if (
      hasErrors({
        cep,
        number,
        fullAddress,
        district,
        city,
        uf,
      })
    ) {
      return setToggleClick(Math.random() * (10 - 3) + 3)
    }
    nextStep()
  }

  useEffect(() => {
    setAddress({
      cep,
      number,
      fullAddress,
      complement,
      district,
      city,
      uf: ufToApi,
    })
  }, [cep, number, fullAddress, complement, district, city, uf])

  useEffect(() => {
    if (toggleClick !== 0) {
      scrollOntoFieldError(errors)
    }
  }, [toggleClick])

  return (
    <Container hidden={step !== 2}>
      <Photo />
      <h2>Endereço</h2>
      <div>
        <InputMask
          mask="99999-999"
          label="CEP*:"
          value={cep}
          setValue={setCep}
          hasError={!!errors.cep}
          msgError={errors.cep}
          onBlur={() =>
            setErrors({
              ...errors,
              cep: genericValidate(cep, 'cep'),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              cep: genericValidate(cep, 'cep'),
            })
          }
          cep="cep"
        />

        <InputText
          label="Número*:"
          value={number}
          setValue={setNumber}
          cep="number"
          hasError={!!errors.number}
          msgError={errors.number}
          onBlur={() =>
            setErrors({
              ...errors,
              number: genericValidate(number, 'número'),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              number: genericValidate(number, 'número'),
            })
          }
          maxLength={100}
          onlyNumber
        />

        <InputText
          label="Endereço*:"
          value={fullAddress}
          setValue={setFullAddress}
          cep="fullAddress"
          hasError={!!errors.fullAddress}
          msgError={errors.fullAddress}
          onBlur={() =>
            setErrors({
              ...errors,
              fullAddress: genericValidate(fullAddress, 'endereço'),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              fullAddress: genericValidate(fullAddress, 'endereço'),
            })
          }
          maxLength={100}
          noSpecialCaracter
        />

        <InputText
          label="Complemento:"
          value={complement}
          setValue={setComplement}
          cep="complement"
          maxLength={100}
          onlyLetter
        />

        <SelectUf uf={uf} setUf={setUf} setUfToApi={setUfToApi} />

        <InputAutoCompleteAntd setValue={setCity} value={city} uf={uf} />

        <InputText
          label="Bairro*:"
          value={district}
          setValue={setDistrict}
          cep="district"
          hasError={!!errors.district}
          msgError={errors.district}
          onBlur={() =>
            setErrors({
              ...errors,
              district: genericValidate(district, 'bairro'),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              district: genericValidate(district, 'bairro'),
            })
          }
          maxLength={100}
          onlyLetter
        />
      </div>
      <FooterNextStep onClickNextStep={onNextStep} />
    </Container>
  )
}

export default Address
