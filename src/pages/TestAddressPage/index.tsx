import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import axios from 'axios'
import React, { useState } from 'react'
import { AddressfromApi } from './adapters/fromApi'

import { Container } from './styles'

export const TestAddressPage: React.FC = () => {
  const [cep, setCep] = useState('')

  const [address, setAddress] = useState('')
  const [district, setDistrict] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  const [isEditing, setIsEditing] = useState(false)

  const onCepNumberChange = async (event: any) => {
    const cepValue = event.target.value

    const cepCleared = cepValue.replace(/\D/g, '')

    if (!cepValue.includes('_')) {
      try {
        const { data } = await axios.get(
          `https://viacep.com.br/ws/${cepCleared}/json`,
        )

        const addressMapped = AddressfromApi(data)

        setAddress(addressMapped.address)
        setDistrict(addressMapped.district)
        setCity(addressMapped.city)
        setState(addressMapped.state)
      } catch (error) {
        console.log(error)
      }
    }

    setCep(cepValue)
  }

  return (
    <Container>
      <div>
        <header>
          <h2>Endereço</h2>
          <button
            onClick={() => {
              setIsEditing(!isEditing)
            }}
          >
            {!isEditing ? 'Editar' : 'Cancelar'}
          </button>
        </header>
        <section>
          <InputMask
            label="CEP:"
            value={cep}
            mask="99.999-999"
            onChange={onCepNumberChange}
          />
          <InputText
            label="Bairro:"
            value={district}
            setValue={setDistrict}
            disabled={!isEditing}
          />
        </section>
        <InputText
          label="Endereço:"
          value={address}
          setValue={setAddress}
          disabled={!isEditing}
        />
        <section>
          <InputText label="Número:" />
          <InputText label="Complemento:" />
        </section>
        <section>
          <InputText
            label="Cidade:"
            value={city}
            setValue={setCity}
            disabled={!isEditing}
          />
          <InputText
            label="UF:"
            value={state}
            setValue={setState}
            disabled={!isEditing}
          />
        </section>

        <button>CADASTRAR ENDEREÇO</button>
      </div>
    </Container>
  )
}
