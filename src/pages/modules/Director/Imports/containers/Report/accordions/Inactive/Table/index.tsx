import React from 'react'

import { Container } from './styles'

interface TableProps {
  listInactivateRegister: {
    name: string
    cpf: string
  }[]
}

export const Table: React.FC<TableProps> = ({ listInactivateRegister }) => {
  return (
    <Container>
      <header>
        <p>Nome</p>
        <p>CPF</p>
      </header>
      <main>
        {listInactivateRegister.map((pacient) => {
          return (
            <div key={pacient.cpf}>
              <p>{pacient.name}</p>
              <p>{pacient.cpf}</p>
            </div>
          )
        })}
      </main>
    </Container>
  )
}
