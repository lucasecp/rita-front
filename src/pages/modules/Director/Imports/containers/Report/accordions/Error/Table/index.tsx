import React from 'react'

import { formatStatus } from '../../helpers/formatStatus'

import { Container } from './styles'

export const Table: React.FC = () => {
  const data = [
    {
      linha: '00001',
      nome: 'Franciaco Campos Arthur Felipe',
      cpf: '737.01.442-20',
      status: 'C',
      return: 'Data de nascimento invalida',
    },
    {
      linha: '00002',
      nome: 'Arthur Felipe',
      cpf: '102.477.339-62',
      status: 'C',
      return: 'Data de nascimento invalida',
    },
    {
      linha: '00003',
      nome: 'Isis Silva',
      cpf: '102.233.799-62',
      status: 'A',
      return: 'Data de nascimento invalida',
    },
  ]

  return (
    <Container>
      <header>
        <p>Linha</p>
        <p>Nome</p>
        <p>CPF</p>
        <p>Status</p>
        <p>Retorno</p>
      </header>
      <main>
        {data.map((pacient, i) => {
          return (
            <div key={i}>
              <p>{pacient.linha}</p>
              <p>{pacient.nome}</p>
              <p>{pacient.cpf}</p>
              <p>{formatStatus(pacient.status)}</p>
              <p>{pacient.return}</p>
            </div>
          )
        })}
      </main>
    </Container>
  )
}
