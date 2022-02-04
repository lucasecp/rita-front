import React from 'react'

import { Container } from './styles'

interface TableProps {
  listErrorsRegister: {
    line: string
    name: string
    cpf: string
    error: string
  }[]
}

export const Table: React.FC<TableProps> = ({ listErrorsRegister }) => {
  return (
    <Container>
      <header>
        <p>Linha</p>
        <p>Nome</p>
        <p>CPF</p>
        <p>Retorno</p>
      </header>
      <main>
        {listErrorsRegister.map((pacient) => {
          return (
            <div key={pacient.cpf}>
              <p>{pacient.line}</p>
              <p>{pacient.name}</p>
              <p>{pacient.cpf}</p>
              <p>{pacient.error}</p>
            </div>
          )
        })}
      </main>
    </Container>
  )
}
