import React from 'react'

import sabinLogo from '@/assets/logo/sabin.png'

import { Container } from './styles'

export default function TableActive({ table }) {
  return (
    <Container>
      <img src={sabinLogo} />
      {table?.type === 'default' ? (
        <p>
          Você tem acesso a <span>Tabela Padrão.</span>
        </p>
      ) : table?.type === 'special' ? (
        <div>
          Tabela Especial
          <p>
            Você tem acesso a <span>Tabela Especial.</span> <br />
            Válido até {table?.validity}
          </p>
        </div>
      ) : (
        <p>Tabela não encontrada.</p>
      )}
    </Container>
  )
}
