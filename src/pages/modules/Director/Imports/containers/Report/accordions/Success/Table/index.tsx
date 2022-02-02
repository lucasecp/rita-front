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
    },
    {
      linha: '00002',
      nome: 'Arthur Felipe',
      cpf: '102.477.339-62',
      status: 'C',
    },
    {
      linha: '00003',
      nome: 'Isis Silva',
      cpf: '102.233.799-62',
      status: 'A',
    },
    // {
    //   linha: '00004',
    //   nome: 'Diego Pereira',
    //   cpf: '010.451.104-75',
    //   status: 'A',
    // },
    // {
    //   linha: '00001',
    //   nome: 'Franciaco Campos',
    //   cpf: '737.01.442-20',
    //   status: 'C',
    // },
    // {
    //   linha: '00002',
    //   nome: 'Arthur Felipe',
    //   cpf: '102.477.339-62',
    //   status: 'C',
    // },
    // {
    //   linha: '00003',
    //   nome: 'Isis Silva',
    //   cpf: '102.233.799-62',
    //   status: 'A',
    // },
    // {
    //   linha: '00004',
    //   nome: 'Diego Pereira',
    //   cpf: '010.451.104-75',
    //   status: 'A',
    // },
    // {
    //   linha: '00001',
    //   nome: 'Franciaco Campos',
    //   cpf: '737.01.442-20',
    //   status: 'C',
    // },
    // {
    //   linha: '00002',
    //   nome: 'Arthur Felipe',
    //   cpf: '102.477.339-62',
    //   status: 'C',
    // },
    // {
    //   linha: '00003',
    //   nome: 'Isis Silva',
    //   cpf: '102.233.799-62',
    //   status: 'A',
    // },
    // {
    //   linha: '00004',
    //   nome: 'Diego Pereira',
    //   cpf: '010.451.104-75',
    //   status: 'A',
    // },
  ]

  return (
    <Container>
      <header>
        <p>Linha</p>
        <p>Nome</p>
        <p>CPF</p>
        <p>Status</p>
      </header>
      <main>
        {data.map((pacient, i) => {
          return (
            <div key={i}>
              <p>{pacient.linha}</p>
              <p>{pacient.nome}</p>
              <p>{pacient.cpf}</p>
              <p>{formatStatus(pacient.status)}</p>
            </div>
          )
        })}
      </main>
    </Container>
  )
}
