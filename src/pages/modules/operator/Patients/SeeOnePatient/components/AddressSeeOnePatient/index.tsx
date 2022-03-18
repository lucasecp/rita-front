import React, { useEffect, useState } from 'react'

import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'

import { Container } from './styles'

import { PatientAddress } from '../../types/index'
import SelectUf from '@/components/smarts/SelectUf'
import SelectCity from '@/components/smarts/SelectCity'

interface AddressSeeOnePatientProps {
  address: PatientAddress
  setAddress: React.Dispatch<React.SetStateAction<PatientAddress>>
}

const AddressSeeOnePatient: React.FC<AddressSeeOnePatientProps> = ({
  address,
  setAddress,
}) => {
  const [cep, setCep] = useState(address.cep || '')
  const [ufToApi, setUfToApi] = useState(address.uf || '')
  const [uf, setUf] = useState(address.uf || '')
  const [city, setCity] = useState(address.city || '')
  const [addressPatient, setAddressPatient] = useState(address.address || '')
  const [number, setNumber] = useState(address.number || '')
  const [district, setDistrict] = useState(address.district || '')
  const [complement, setComplement] = useState(address.complement || '')

  useEffect(() => {
    setAddress({
      cep,
      uf: ufToApi,
      city,
      address: addressPatient,
      number,
      district,
      complement,
    })
  }, [cep, uf, city, addressPatient, number, district, complement])

  return (
    <Container>
      <h2>Endereço</h2>
      <section>
        <InputMask
          label="CEP:"
          mask="99.999-999"
          value={cep}
          setValue={setCep}
          name="cep"
          // onBlur={() => setErrors({ ...errors, ...validateCep(cep) })}
          // onKeyUp={() => setErrors({ ...errors, ...validateCep(cep) })}
          // msgError={errors.cep}
          // hasError={!!errors.cep}
        />
        <SelectUf setUf={setUf} uf={uf} setUfToApi={setUfToApi} />
        <SelectCity setCity={setCity} uf={uf} city={city} />

        <InputText
          label="Endereço:"
          value={addressPatient}
          setValue={setAddressPatient}
          name="address"
          maxLength={100}
        />
        <InputText
          label="Número:"
          value={number}
          setValue={setNumber}
          name="number"
          maxLength={20}
        />
      </section>
      <div>
        <InputText
          label="Complemento:"
          value={complement}
          setValue={setComplement}
          name="complement"
          maxLength={50}
        />
        <InputText
          label="Bairro:"
          value={district}
          setValue={setDistrict}
          name="district"
          maxLength={100}
        />
      </div>
    </Container>
  )
}

export default AddressSeeOnePatient
