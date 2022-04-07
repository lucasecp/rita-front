import React, { useEffect, useState } from 'react'

import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import { Select } from '@/components/Form/Select'

import { DependentDataType } from '../../types'
import { Container } from './styles'

type DependentAddressProps = Pick<DependentDataType, 'address'>

export const DependentAddress: React.FC<DependentAddressProps> = ({
  address,
}) => {
  const [cep, setCep] = useState(address?.cep || '')
  const [uf, setUf] = useState(address?.uf || '')
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
    setDistrict(address?.district || '')
    setComplement(address?.complement || '')
    setNumber(address?.number || '')
  }, [address])

  return (
    <Container>
      <h1>Endereço</h1>
      <section>
        <InputMask
          label="CEP:"
          mask="99.999-999"
          value={cep}
          name="cep"
          disabled
        />
        <Select
          label="UF:"
          labelDefaultOption="Selecione:"
          value={uf}
          name="uf"
          disabled
        />
        <InputText label="Cidade:" value={city} name="city" disabled />
        <InputText
          label="Endereço:"
          value={addressDep}
          name="address"
          disabled
        />
        <InputText label="Número:" value={number} name="number" disabled />

        <InputText label="Bairro:" value={district} name="district" disabled />
        <InputText
          label="Complemento:"
          value={complement}
          name="complement"
          disabled
        />
      </section>
    </Container>
  )
}
