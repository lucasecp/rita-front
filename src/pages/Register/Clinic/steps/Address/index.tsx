import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText/index'
import { Select } from '@/components/Form/Select/index'
import { InputEmail } from '@/components/smarts/InputEmail'
import { scrollOntoFieldError } from '@/helpers/scrollOntoFieldError'
import { validateCPF } from '@/helpers/validateFields/validateCPF'
import { validatePhone } from '@/helpers/validateFields/validatePhone'
import { useMessage } from '@/hooks/useMessage'
import React, { useEffect, useState } from 'react'
import { MultiSelectOption } from '../../../../../components/Form/MultSelect/index'
import FooterNextStep from '../../components/FooterNextStep'
import Photo from '../../components/Photo'
import { genericValidate } from '../../helpers/validatorFields'
import { useRegisterClinic } from '../../hooks'
import { useValidator } from '../../hooks/useValidator'
import { Container } from './styles'

const Address: React.FC = () => {
  const [cep, setCep] = useState('')

  const [number, setNumber] = useState('')

  const [fullAddress, setFullAddress] = useState('')

  const [complement, setComplement] = useState('')

  const [district, setDistrict] = useState('')

  const [city, setCity] = useState('')

  const [uf, setUf] = useState('')

  const [toggleClick, setToggleClick] = useState(0)

  const [errorMessage, sendErrorMessage] = useMessage()
  const { step, nextStep, setAddress, errors, setErrors } = useRegisterClinic()
  const { hasErrors } = useValidator()

  const onNextStep = () => {
    sendErrorMessage()
    if (
      hasErrors({
        cep,
        number,
        fullAddress,
        complement,
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
      uf,
    })
  }, [cep, number, fullAddress, complement, district, city, uf])

  useEffect(() => {
    if (toggleClick !== 0) {
      scrollOntoFieldError(errors)
    }
  }, [toggleClick])

  const onSelectField = (field: string, value: MultiSelectOption) => {
    const data = {
      cep,
      number,
      fullAddress,
      complement,
      district,
      city,
      uf,
    }
    hasErrors({
      ...data,
      clinics: value,
    })
  }

  return (
    <Container hidden={step !== 2}>
      <Photo />
      <h2>Endereço</h2>
      <div>
        <InputText
          label="Nome Completo:"
          value={cep}
          setValue={setCep}
          hasError={!!errors.cep}
          msgError={errors.cep}
          onBlur={() =>
            setErrors({
              ...errors,
              cep: genericValidate(cep, 'nome'),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              cep: genericValidate(cep, 'nome'),
            })
          }
          cep="cep"
          maxLength={200}
          onlyLetter
        />

        <InputText
          label="Nome Profissional:"
          value={number}
          setValue={setNumber}
          cep="number"
          hasError={!!errors.number}
          msgError={errors.number}
          onBlur={() =>
            setErrors({
              ...errors,
              number: genericValidate(number, 'nome profissional'),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              number: genericValidate(number, 'nome profissional'),
            })
          }
          maxLength={200}
          onlyLetter
        />

        <InputMask
          mask="999.999.999-99"
          label="CPF:"
          value={fullAddress}
          setValue={setFullAddress}
          cep="fullAddress,"
          hasError={!!errors.fullAddress}
          msgError={errors.fullAddress}
          onBlur={() =>
            setErrors({
              ...errors,
              fullAddress: validateCPF(fullAddress),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              fullAddress: validateCPF(fullAddress),
            })
          }
        />
        <Select
          label="Receber Agendamentos:"
          labelDefaultOption="Selecione"
          value={complement}
          setValue={setComplement}
          name="complement"
          options={[
            { label: 'Sim', value: 'yes' },
            { label: 'Não', value: 'no' },
          ]}
          hasError={!!errors.complement}
          msgError={errors.complement}
          onBlur={() =>
            setErrors({
              ...errors,
              complement: !hasErrors({ complement }) ? '' : 'Campo obrigatório',
            })
          }
        />

        <InputEmail
          initialEmail={district}
          onGetEmail={setDistrict}
          hasError={(hasError) =>
            toggleClick !== 0 && setErrors({ ...errors, district: hasError })
          }
          checkHasError={errorMessage}
          onKeyUp={sendErrorMessage}
          onBlur={sendErrorMessage}
        />

        <InputMask
          mask="(99) 99999-9999"
          label="Celular:"
          value={city}
          setValue={setCity}
          cep="city"
          hasError={!!errors.city}
          msgError={errors.city}
          onBlur={() =>
            setErrors({
              ...errors,
              city: validatePhone(city),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              city: validatePhone(city),
            })
          }
        />
      </div>
      <FooterNextStep onClickNextStep={onNextStep} />
    </Container>
  )
}

export default Address
