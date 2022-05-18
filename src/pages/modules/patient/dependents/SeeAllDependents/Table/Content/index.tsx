import React from 'react'
import { Container, ListItem } from './styles'
import Actions from './Actions'
import { ContentProps } from '../../types'

const Content: React.FC<ContentProps> = ({ dependents }) => {
  return (
    <Container>
      {dependents?.map((dep, index) => {
        // Não tiver documento
        // Validação expirou
        // Status Negado
        const dependentHasPendency =
          !dep.documentsOk || dep.isValidate || dep.status === 'Negado'

        return (
          <ListItem key={index} warning={dependentHasPendency}>
            <li>{dep.name}</li>
            <li>{dep.birthdate}</li>
            <li>{dep.cpf}</li>
            <li>{dep.status}</li>
            <Actions
              idDependent={dep.id}
              status={dep.status}
              warning={dependentHasPendency}
              documentsOk={dep.documentsOk}
              isValidate={dep.isValidate}
              dependent={{ id: dep.id, birthdate: dep.birthdate, cpf: dep.cpf }}
            />
          </ListItem>
        )
      })}
      {!dependents.length && <h2>Nenhum dependente cadastrado</h2>}
    </Container>
  )
}

export default Content
