import React from 'react'

import sabinLogo from '@/assets/logo/sabin.png'

import { Container } from './styles'

export default function TableActive({ table }) {
  return (
    <Container>
      <img src={sabinLogo} />
      {table === 'default' ? (
        <p>
          Você tem acesso a <span>Tabela Padrão.</span>
        </p>
      ) : (
        <div>
         Tabela Especial
          <p>
            Você tem acesso a <span>Tabela Especial.</span> <br />
            Válido até 04/08/2023
          </p>
        </div>
      )}
    </Container>
  )
}
