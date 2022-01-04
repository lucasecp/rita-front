import React from 'react'
import { Container, ListItem } from './styles'
import Actions from './Actions'
import CustomTooltip from '@/components/Tooltip'
import { ContentProps } from '../../types'
import { useHistory } from 'react-router'
import { PATIENT_SEE_DEPENDENT } from '@/routes/constants/namedRoutes/routes'

const Content: React.FC<ContentProps> = ({ dependents }) => {
  const history = useHistory()
  return (
    <Container>
      {dependents?.map((dep, index) => (
        <ListItem
          key={index}
          warning={!dep.documentsOk && !dep.isValidate}
          onClick={() =>
            history.push(PATIENT_SEE_DEPENDENT, { idDependent: dep.id })
          }
        >
          <li>{dep.name}</li>
          <li>{dep.birthdate}</li>
          <li>{dep.cpf}</li>
          <li>{dep.status}</li>
          <Actions
            idDependent={dep.id}
            status={dep.status}
            warning={!dep.documentsOk && !dep.isValidate}
            documentsOk={dep.documentsOk}
            isValidate={dep.isValidate}
          />
        </ListItem>
      ))}
      {/* {!dependents.total && <h2>Nenhum resultado encontrado</h2>} */}
    </Container>
  )
}

export default Content
