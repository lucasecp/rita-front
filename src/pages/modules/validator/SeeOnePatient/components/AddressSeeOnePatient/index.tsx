import React from 'react'

import { Container } from './styles'
import { TextMask } from '@/components/TextMask'
import { PatientAddress } from '../../@types'

interface AddressSeeOnePatientProps {
  address: PatientAddress
}

export const AddressSeeOnePatient: React.FC<AddressSeeOnePatientProps> = ({
  address,
}) => {
  return (
    <Container>
      <h2>Endereço</h2>
      <div>
        <div>
          <label>Endereço:</label>
          <p>{address?.address || ''}</p>
        </div>
        <section>
          <div>
            <label>Número:</label>
            <p>{address?.number || ''}</p>
          </div>
          <div>
            <label>Complemento:</label>
            <p>{address?.complement || ''}</p>
          </div>
        </section>
        <div>
          <label>CEP:</label>
          <TextMask mask="99.999-999" text={address?.cep || ''} />
        </div>
        <div>
          <label>Bairro:</label>
          <p>{address?.district || ''}</p>
        </div>
        <div>
          <label>Cidade:</label>
          <p>{address?.city || ''}</p>
        </div>
        <div>
          <label>UF:</label>
          <p>{address?.uf || ''}</p>
        </div>
      </div>
    </Container>
  )
}
