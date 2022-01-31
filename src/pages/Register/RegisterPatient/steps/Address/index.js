import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import { Select } from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'

import { Container, BtnGroup, BtnPrev, CustomBtn } from './styles'
import { UF } from './static'
import { validateCep } from '../../helpers/validator'

export const Address = ({
  setData,
  dataClientSabin,
  newData,
  setStep,
  step,
}) => {
  const [cep, setCep] = useState('')
  const [uf, setUf] = useState('')
  const [city, setCity] = useState('')
  const [address, setAdress] = useState('')
  const [numberHome, setNumberHome] = useState('')
  const [district, setDistrict] = useState('')
  const [complement, setComplement] = useState('')
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const addressFromSabinCard = dataClientSabin.endereco
    const newDataAddress = newData.endereco

    setCep(newDataAddress?.cep || addressFromSabinCard?.cep || '')
    setUf(newDataAddress?.uf || addressFromSabinCard?.uf || '')
    setCity(newDataAddress?.cidade || addressFromSabinCard?.cidade || '')
    setAdress(
      newDataAddress?.logradouro || addressFromSabinCard?.logradouro || '',
    )
    setNumberHome(newDataAddress?.numero || addressFromSabinCard?.numero || '')
    setDistrict(newDataAddress?.bairro || addressFromSabinCard?.bairro || '')
    setComplement(
      newDataAddress?.complemento || addressFromSabinCard?.complemento || '',
    )
  }, [])

  useEffect(() => {
    const dataObj = {
      bairro: district,
      uf,
      cidade: city,
      logradouro: address,
      numero: numberHome,
      cep,
      complemento: complement,
    }
    setData((data) => {
      return { ...data, endereco: dataObj }
    })
  }, [address, cep, numberHome, city, complement, uf, district])

  const onNextStep = () => {
    const hasErrors = Object.values(errors).some((value) => value !== '')

    if (!hasErrors) {
      setStep(step + 1)
    }
  }

  return (
    <>
      <Container>
        <h1>Endereço</h1>
        <section>
          <InputMask
            label="CEP:"
            mask="99.999-999"
            value={cep}
            setValue={setCep}
            name="cep"
            onBlur={() => setErrors({ ...errors, ...validateCep(cep) })}
            onKeyUp={() => setErrors({ ...errors, ...validateCep(cep) })}
            msgError={errors.cep}
            hasError={errors.cep}
          />
          <Select
            label="UF:"
            labelDefaultOption="Selecione:"
            options={UF}
            setValue={setUf}
            value={uf}
            name="uf"
          />
          <InputText
            label="Cidade:"
            value={city}
            setValue={setCity}
            name="city"
            maxLength={100}
          />
          <section>
            <InputText
              label="Endereço:"
              value={address}
              setValue={setAdress}
              name="address"
              maxLength={100}
            />
            <InputText
              label="Número:"
              value={numberHome}
              setValue={setNumberHome}
              name="numberHome"
              maxLength="50"
            />
          </section>
          <InputMask
            label="Bairro:"
            value={district}
            setValue={setDistrict}
            name="district"
            maxLength={100}
          />
          <InputText
            label="Complemento:"
            value={complement}
            setValue={setComplement}
            name="complement"
            maxLength={100}
          />
        </section>
      </Container>
      <BtnGroup>
        <BtnPrev onClick={() => setStep(step - 1)}>Etapa Anterior</BtnPrev>
        <CustomBtn onClick={onNextStep}>Próxima Etapa</CustomBtn>
      </BtnGroup>
    </>
  )
}
