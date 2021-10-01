import React from 'react'

import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import Select from '@/components/Form/Select'

import { Container } from './styles'

const AddressPatientData = ({ address }) => {
  return (
    <Container>
      <h2>Endereço</h2>
      <div>
        <InputText
          label="Endereço:"
          value={address?.logradouro || ''}
          name="address"
          disabled
        />
        <section>
          <InputText
            label="Número:"
            value={address?.numero || ''}
            name="number"
            disabled
          />
          <InputText
            label="Complemento:"
            value={address?.complemento || ''}
            name="complement"
            disabled
          />
        </section>
        <InputMask
          label="CEP:"
          mask="99.999-999"
          value={address?.cep || ''}
          name="cep"
          disabled
        />
        <InputMask
          label="Bairro:"
          value={address?.bairro || ''}
          name="district"
          disabled
        />
        <InputText
          label="Cidade:"
          value={address?.cidade || ''}
          name="city"
          disabled
        />
        <Select
          label="UF:"
          labelDefaultOption={address?.uf}
          name="uf"
          disabled
        />
      </div>
    </Container>
  )
}

export default AddressPatientData
