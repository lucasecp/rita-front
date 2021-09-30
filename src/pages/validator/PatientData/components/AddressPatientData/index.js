import React from 'react'
import { Col, Row } from 'react-bootstrap'

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
          value={address?.address || ''}
          name="address"
          disabled
        />
        <section>
          <InputText
            label="Número:"
            value={address?.number || ''}
            type="number"
            name="number"
            disabled
          />
          <InputText
            label="Complemento:"
            value={address?.complement || ''}
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
          value={address?.district || ''}
          name="district"
          disabled
        />
        <InputText
          label="Cidade:"
          value={address?.city || ''}
          name="city"
          disabled
        />
        <Select label="UF:" value={address?.uf || ''} name="uf" disabled />
      </div>
    </Container>
  )
}

export default AddressPatientData
