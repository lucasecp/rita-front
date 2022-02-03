import React, { useEffect, useState } from 'react'

import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'

import { Container } from './styles'
import { AddressI, ErrorsI } from '../../Types'
import SelectUf from '../SelectUf'
import {
  validateCep,
  validateAddress,
  validateNumberHome,
  validateDistrict,
  validateCity,
  validateUf,
} from '../../helpers/validatorFields'

interface ClinicAddressProps {
  address: AddressI
  setAddress: (value: any) => void
  initialData: AddressI
  isEditing: boolean
  errors: ErrorsI
  setErrors: (error: ErrorsI) => void
}

export const ClinicAddress: React.FC<ClinicAddressProps> = ({
  address,
  setAddress,
  isEditing,
  initialData,
  errors,
  setErrors,
}) => {
  const [cep, setCep] = useState(address?.cep || '')
  const [uf, setUf] = useState(address?.uf || '')
  const [ufToApi, setUfToApi] = useState('')
  const [city, setCity] = useState(address?.city || '')
  const [addressDep, setAddressDep] = useState(address?.address || '')
  const [number, setNumber] = useState(address?.number || '')
  const [district, setDistrict] = useState(address?.district || '')
  const [complement, setComplement] = useState(address?.complement || '')

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
      uf: ufToApi,
      city,
      address: addressDep,
      number,
      complement,
      district,
    })
  }, [cep, uf, city, addressDep, number, district, complement, errors])

  useEffect(() => {
    if (!isEditing) {
      setCep(initialData?.cep || '')
      setUf(initialData?.uf || '')
      setCity(initialData?.city || '')
      setAddressDep(initialData?.address || '')
      setNumber(initialData?.number || '')
      setDistrict(initialData?.district || '')
      setComplement(initialData?.complement || '')
      setErrors({})
    }
  }, [isEditing, initialData])

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
          onBlur={() => setErrors({ ...errors, cep: validateCep(cep) })}
          onKeyUp={() => setErrors({ ...errors, cep: validateCep(cep) })}
          msgError={errors.cep}
          hasError={!!errors.cep}
          name="cep"
        />
        <SelectUf
          setUf={setUf}
          uf={uf}
          disabled={!isEditing}
          setUfToApi={setUfToApi}
          onBlur={() => setErrors({ ...errors, uf: validateUf(uf) })}
          hasError={!!errors?.uf}
          msgError={errors?.uf}
        />
        <InputText
          label="Cidade:"
          value={city}
          setValue={setCity}
          disabled={!isEditing}
          onBlur={() => setErrors({ ...errors, city: validateCity(city) })}
          onKeyUp={() => setErrors({ ...errors, city: validateCity(city) })}
          msgError={errors.city}
          hasError={!!errors.city}
          maxLength={50}
          name="city"
        />
        <InputText
          label="Endereço:"
          value={addressDep}
          setValue={setAddressDep}
          name="address"
          disabled={!isEditing}
          onBlur={() =>
            setErrors({ ...errors, address: validateAddress(addressDep) })
          }
          onKeyUp={() =>
            setErrors({ ...errors, address: validateAddress(addressDep) })
          }
          msgError={errors.address}
          hasError={!!errors.address}
          maxLength={100}
        />
        <InputText
          label="Número:"
          value={number}
          setValue={setNumber}
          name="number"
          disabled={!isEditing}
          onBlur={() =>
            setErrors({ ...errors, number: validateNumberHome(number) })
          }
          onKeyUp={() =>
            setErrors({ ...errors, number: validateNumberHome(number) })
          }
          msgError={errors.number}
          hasError={!!errors.number}
          maxLength={20}
        />
        <InputText
          label="Complemento:"
          value={complement}
          setValue={setComplement}
          name="complement"
          disabled={!isEditing}
          maxLength={100}
        />
        <InputText
          label="Bairro:"
          value={district}
          setValue={setDistrict}
          disabled={!isEditing}
          onBlur={() =>
            setErrors({ ...errors, district: validateDistrict(district) })
          }
          onKeyUp={() =>
            setErrors({ ...errors, district: validateDistrict(district) })
          }
          msgError={errors.district}
          hasError={!!errors.district}
          maxLength={100}
          name="district"
        />
      </section>
    </Container>
  )
}
