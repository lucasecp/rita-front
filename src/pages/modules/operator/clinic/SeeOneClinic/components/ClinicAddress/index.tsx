import React, { useEffect, useState } from 'react'

import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import { Select } from '@/components/Form/Select'

import { Container } from './styles'
import { UF } from '@/constants/ufs'
import { AddressI, ErrorsAddressI } from '../../Types'

interface ClinicAddressProps {
  address: AddressI
  setAddress: (value: any) => void
  initialData: AddressI
  isEditing: boolean
  cancelEdit: boolean
}

export const ClinicAddress: React.FC<ClinicAddressProps> = ({
  address,
  setAddress,
  isEditing,
  initialData,
  cancelEdit,
}) => {
  const [cep, setCep] = useState(address?.cep || '')
  const [uf, setUf] = useState(address?.uf || '')
  const [city, setCity] = useState(address?.city || '')
  const [addressDep, setAddressDep] = useState(address?.address || '')
  const [number, setNumber] = useState(address?.number || '')
  const [district, setDistrict] = useState(address?.district || '')
  const [complement, setComplement] = useState(address?.complement || '')

  const [errors, setErrors] = useState<ErrorsAddressI>({})

  useEffect(() => {
    setCep(address?.cep || '')
    setUf(address?.uf || '')
    setCity(address?.city || '')
    setAddressDep(address?.address || '')
    setNumber(address?.number || '')
    setDistrict(address?.district || '')
    setComplement(address?.complement || '')
  }, [address])

  useEffect(() => {
    setAddress({
      cep,
      uf,
      city,
      address: addressDep,
      number,
      district,
      complement,
      hasError: Object.values(errors).some((value) => value !== ''),
    })
  }, [cep, uf, city, addressDep, number, district, complement, errors])

  useEffect(() => {
    if (cancelEdit) {
      setCep(initialData?.cep || '')
      setUf(initialData?.uf || '')
      setCity(initialData?.city || '')
      setAddressDep(initialData?.address || '')
      setNumber(initialData?.number || '')
      setDistrict(initialData?.district || '')
      setComplement(initialData?.complement || '')
      setErrors({})
    }
  }, [cancelEdit, initialData])

  return (
    <Container>
      <h1>Endereço</h1>
      <section>
        <InputMask
          label="CEP:"
          mask="99.999-999"
          value={cep}
          setValue={setCep}
          disabled={!isEditing}
          // onBlur={() => setErrors({ ...errors, cep: validateCep(cep) })}
          // onKeyUp={() => setErrors({ ...errors, cep: validateCep(cep) })}
          msgError={errors.cep}
          hasError={!!errors.cep}
        />
        <Select
          label="UF:"
          labelDefaultOption="Selecione:"
          options={UF}
          setValue={setUf}
          value={uf}
          disabled={!isEditing}
        />
        <InputText
          label="Cidade:"
          value={city}
          setValue={setCity}
          name="city"
          disabled={!isEditing}
        />
        <InputText
          label="Endereço:"
          value={addressDep}
          setValue={setAddressDep}
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
        <InputText
          label="Bairro:"
          value={district}
          setValue={setDistrict}
          disabled={!isEditing}
        />
      </section>
    </Container>
  )
}
