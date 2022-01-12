import React from 'react'

import { Container } from './styles'
import { TextMask } from '@/components/TextMask'

const AddressPatientData = ({ address }) => {
  return (
    <Container>
      <h2>Endereço</h2>
      <div>
        <div>
          <label>Endereço:</label>
          <p>{address?.logradouro || ''}</p>
        </div>
        <section>
          <div>
            <label>Número:</label>
            <p>{address?.numero || ''}</p>
          </div>
          <div>
            <label>Complemento:</label>
            <p>{address?.complemento || ''}</p>
          </div>
        </section>
        <div>
          <label>CEP:</label>
          <TextMask mask="99.999-999" text={address?.cep || ''} />
        </div>
        <div>
          <label>Bairro:</label>
          <p>{address?.bairro || ''}</p>
        </div>
        <div>
          <label>Cidade:</label>
          <p>{address?.cidade || ''}</p>
        </div>
        <div>
          <label>UF:</label>
          <p>{address?.uf || ''}</p>
        </div>
      </div>
    </Container>
  )
}

export default AddressPatientData
