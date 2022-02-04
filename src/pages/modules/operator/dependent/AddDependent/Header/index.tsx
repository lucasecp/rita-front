import React, { useEffect } from 'react'
import { Container } from './styles'
import { useLocation, useHistory } from 'react-router-dom'
import { OPERATOR_DEPENDENT_MANAGMENT } from '@/routes/constants/namedRoutes/routes'

const Header: React.FC = () => {
  const location = useLocation()
  const history = useHistory()
  const holder = location.state?.holder

  useEffect(() => {
    if (!holder) {
      history.push(OPERATOR_DEPENDENT_MANAGMENT)
    }
  }, [])
  
  return (
    <Container>
      <div>
        <div>
          <h6>Titular:</h6>
          <h5>{holder?.name}</h5>
        </div>
        <div>
          <h6>CPF:</h6>
          <h5>{holder?.cpf}</h5>
        </div>
      </div>
      <span>Plano {holder?.plan}</span>
    </Container>
  )
}

export default Header
