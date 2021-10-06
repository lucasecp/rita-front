import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'
import menuPatient from '../../menuItems/patient'
import menuValidator from '../../menuItems/validator'
import { useAuth } from '@/context/login'
import permission from '@/routes/permissions'
function Menu({ expanded }) {
  const {userPermission} = useAuth()

  return (
    <Container expanded={expanded}>
      {userPermission === permission.PATIENT && menuPatient.map((item) => (
        <li key={item.name}>
          <span />
          <div>
            {item.icon}
            {expanded && <Link  to={item.path}>{item.name}</Link>}
          </div>
        </li>
      ))}

      {userPermission === permission.VALIDATOR && menuValidator.map((item) => (
        <li key={item.name}>
          <span />
          <div>
            {item.icon}
            {expanded && <Link to={item.path}>{item.name}</Link>}
          </div>
        </li>
      ))}

    </Container>
  )
}

export default Menu
