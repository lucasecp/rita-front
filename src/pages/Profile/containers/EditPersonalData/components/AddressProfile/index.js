import React, { useEffect, useState } from 'react'

import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import Select from '@/components/Form/Select'

import { Container } from './styles'
import { UF } from '../../constants/uf'
import { validateCep } from '../../helpers/validatorFields'

export const AddressProfile = ({ address, setAddress, isEditing }) => {
  const [cep, setCep] = useState(address?.cep || '')
  const [uf, setUf] = useState(address?.uf || '')
  const [city, setCity] = useState(address?.city || '')
  const [addressUser, setAddressUser] = useState(address?.addressUser || '')
  const [number, setNumber] = useState(address?.number || '')
  const [district, setDistrict] = useState(address?.district || '')
  const [complement, setComplement] = useState(address?.complement || '')

  const [errors, setErrors] = useState({})

  useEffect(() => {
    setAddress({
      cep,
      uf,
      city,
      addressUser,
      number,
      district,
      complement,
      hasError: Object.values(errors).some((value) => value !== ''),
    })
  }, [cep, uf, city, addressUser, number, district, complement, errors])

  useEffect(() => {
    setCep(address?.cep || '')
    setUf(address?.uf || '')
    setCity(address?.city || '')
    setAddressUser(address?.addressUser || '')
    setNumber(address?.number || '')
    setDistrict(address?.district || '')
    setComplement(address?.complement || '')
  }, [isEditing])

  return (
    <Container>
      <h1>Endereço</h1>
      <section>
        <InputText
          label="Endereço:"
          value={addressUser}
          setValue={setAddressUser}
          name="address"
          disabled={!isEditing}
        />
        <InputText
          label="Número:"
          value={number}
          setValue={setNumber}
          name="number"
          disabled={!isEditing}
        />
        <InputText
          label="Complemento:"
          value={complement}
          setValue={setComplement}
          name="complement"
          disabled={!isEditing}
        />
        <InputMask
          label="Bairro:"
          value={district}
          setValue={setDistrict}
          name="district"
          disabled={!isEditing}
        />
        <section>
          <InputText
            label="Cidade:"
            value={city}
            setValue={setCity}
            name="city"
            disabled={!isEditing}
          />
          <Select
            label="UF:"
            labelDefaultOption="Selecione:"
            options={UF}
            setValue={setUf}
            value={uf}
            name="uf"
            disabled={!isEditing}
          />
        </section>
        <InputMask
          label="CEP:"
          mask="99.999-999"
          value={cep}
          setValue={setCep}
          name="cep"
          disabled={!isEditing}
          onBlur={() => setErrors({ ...errors, cep: validateCep(cep) })}
          onKeyUp={() => setErrors({ ...errors, cep: validateCep(cep) })}
          msgError={errors.cep}
          hasError={errors.cep}
        />
      </section>
    </Container>
  )
}
