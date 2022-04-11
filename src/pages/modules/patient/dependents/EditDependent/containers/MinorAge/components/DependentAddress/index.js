import React, { useEffect, useState } from 'react'

import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import { Select } from '@/components/Form/Select'

import { Container } from './styles'
import { UF } from '@/constants/ufs'
import {
  validateCep,
  validateUF,
  validateCity,
  validateAddress,
  validateNumber,
  validateDistrict,
} from '../../helpers/validatorFields'

export const DependentAddress = ({
  address,
  setAddressToSave,
  setAnyFieldsHasChanged,
  anyFieldsHasChanged,
  showErrors,
  setAddressError,
  addressError,
}) => {
  const [cep, setCep] = useState(address?.cep || '')
  const [uf, setUf] = useState(address?.uf || '')
  const [city, setCity] = useState(address?.city || '')
  const [addressDep, setAddressDep] = useState(address?.address || '')
  const [number, setNumber] = useState(address?.number || '')
  const [district, setDistrict] = useState(address?.district || '')
  const [complement, setComplement] = useState(address?.complement || '')

  useEffect(() => {
    setAnyFieldsHasChanged(anyFieldsHasChanged + 1)
  }, [cep, uf, city, addressDep, number, district, complement])

  useEffect(() => {
    setAddressError({
      cep: validateCep(cep),
      uf: validateUF(uf),
      city: validateCity(city),
      address: validateAddress(addressDep),
      number: validateNumber(number),
      district: validateDistrict(district),
    })
  }, [cep, uf, city, addressDep, number, district])

  useEffect(() => {
    setAddressToSave({
      cep,
      uf,
      city,
      addressDep,
      number,
      district,
      complement,
    })
  }, [cep, uf, city, addressDep, number, district, complement])

  return (
    <Container>
      <h1>Endereço</h1>
      <section>
        <InputMask
          label="CEP:"
          mask="99.999-999"
          value={cep}
          setValue={setCep}
          name="cep"
          msgError={showErrors && addressError.cep}
          hasError={showErrors && addressError.cep}
        />
        <Select
          label="UF:"
          labelDefaultOption="Selecione:"
          options={UF}
          setValue={setUf}
          value={uf}
          name="uf"
          msgError={showErrors && addressError.uf}
          hasError={showErrors && addressError.uf}
        />
        <InputText
          label="Cidade:"
          value={city}
          setValue={setCity}
          name="city"
          msgError={showErrors && addressError.city}
          hasError={showErrors && addressError.city}
        />
        <InputText
          label="Endereço:"
          value={addressDep}
          setValue={setAddressDep}
          name="address"
          msgError={showErrors && addressError.address}
          hasError={showErrors && addressError.address}
        />
        <InputText
          label="Número:"
          value={number}
          setValue={setNumber}
          name="number"
          msgError={showErrors && addressError.number}
          hasError={showErrors && addressError.number}
        />

        <InputMask
          label="Bairro:"
          value={district}
          setValue={setDistrict}
          name="district"
          msgError={showErrors && addressError.district}
          hasError={showErrors && addressError.district}
        />
        <InputText
          label="Complemento:"
          value={complement}
          setValue={setComplement}
          name="complement"
        />
      </section>
    </Container>
  )
}
