import React, { useState } from 'react'

import { Checkbox } from '@/components/Form/Checkbox'
import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask'
import SelectUf from '@/components/smarts/SelectUf'
import SelectCity from '@/components/smarts/SelectCity'

import { Container, InputsArea } from './styles'

export const UserAddress: React.FC = () => {
  const [addressIsEqualHolder, setAddressIsEqualHolder] = useState(false)

  const [cep, setCep] = useState('')
  const [uf, setUf] = useState('')
  const [ufToApi, setUfToApi] = useState('')
  const [city, setCity] = useState('')
  const [addressDep, setAddressDep] = useState('')
  const [number, setNumber] = useState('')
  const [district, setDistrict] = useState('')
  const [complement, setComplement] = useState('')

  return (
    <Container>
      <h3>Endereço</h3>

      <InputsArea>
        <Checkbox
          checked={addressIsEqualHolder}
          label="Meu endereço é igual do meu titular"
          setValue={setAddressIsEqualHolder}
        />

        <section className="section1">
          <InputMask
            label="CEP:"
            mask="99.999-999"
            value={cep}
            setValue={setCep}
            name="cep"
          />
          <SelectUf setUf={setUf} uf={uf} setUfToApi={setUfToApi} />
          <SelectCity setCity={setCity} uf={uf} city={city} />
        </section>
        <section className="section2">
          <InputText
            label="Endereço:"
            value={addressDep}
            setValue={setAddressDep}
          />
          <InputText label="Número:" value={number} setValue={setNumber} />
        </section>
        <section className="section3">
          <InputText label="Bairro:" value={district} setValue={setDistrict} />
          <InputText
            label="Complemento:"
            value={complement}
            setValue={setComplement}
          />
        </section>
      </InputsArea>
    </Container>
  )
}
