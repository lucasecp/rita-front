import React, { useEffect, useState } from 'react'

import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import { Select } from '@/components/Form/Select'

import { Container } from './styles'
import { UF } from '../../constants/UFs'

import { PatientAddress } from '../../types/index'

interface AddressSeeOnePatientProps {
  address: PatientAddress
  setAddress: React.Dispatch<React.SetStateAction<PatientAddress>>
}

const AddressSeeOnePatient: React.FC<AddressSeeOnePatientProps> = ({
  address,
  setAddress,
}) => {
  const [cep, setCep] = useState(address.cep || '')
  const [uf, setUf] = useState(address.uf || '')
  const [city, setCity] = useState(address.city || '')
  const [addressPatient, setAddressPatient] = useState(address.address || '')
  const [number, setNumber] = useState(address.number || '')
  const [district, setDistrict] = useState(address.district || '')
  const [complement, setComplement] = useState(address.complement || '')

  useEffect(() => {
    setAddress({
      cep,
      uf,
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
      <div>
        <InputText
          label="Endereço:"
          value={addressPatient}
          setValue={setAddressPatient}
          name="address"
        />
        <section>
          <InputText
            label="Número:"
            value={number}
            setValue={setNumber}
            name="number"
          />
          <InputText
            label="Complemento:"
            value={complement}
            setValue={setComplement}
            name="complement"
          />
        </section>
        <InputMask
          label="CEP:"
          mask="99.999-999"
          value={cep}
          setValue={setCep}
          name="cep"
        />
        <InputText
          label="Bairro:"
          value={district}
          setValue={setDistrict}
          name="district"
        />
        <InputText
          label="Cidade:"
          value={city}
          setValue={setCity}
          name="city"
        />
        <Select
          label="UF:"
          labelDefaultOption="Selecione:"
          options={UF}
          setValue={setUf}
          value={uf}
          name="uf"
        />
      </div>
    </Container>
  )
}

export default AddressSeeOnePatient
