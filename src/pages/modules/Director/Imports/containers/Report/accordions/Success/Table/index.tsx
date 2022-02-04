import React from 'react'

import { Container } from './styles'

interface TableProps {
  listSucessRegister: {
    line: string
    name: string
    cpf: string
    obs: string
  }[]
}

export const Table: React.FC<TableProps> = ({ listSucessRegister }) => {
  return (
    <Container>
      <header>
        <p>Linha</p>
        <p>Nome</p>
        <p>CPF</p>
        <p>Status</p>
      </header>
      <main>
        {listSucessRegister.map((pacient) => {
          return (
            <div key={pacient.cpf}>
              <p>{pacient.line}</p>
              <p>{pacient.name}</p>
              <p>{pacient.cpf}</p>
              <p>{pacient.obs}</p>
            </div>
          )
        })}
      </main>
    </Container>
  )
}
