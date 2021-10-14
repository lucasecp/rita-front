import React from 'react'
import { NavLink } from 'react-router-dom'

import { Container } from './styles'
// import menuPatient from '../../menuItems/patient'
// import menuValidator from '../../menuItems/validator'
// import { useAuth } from '@/context/login'
// import permission from '@/routes/constants/permissions'
import TemporaryMenu from '../../menuItems/temporary'
function Menu({ expanded }) {
  // const {userPermission} = useAuth()

  return (
    <Container expanded={expanded}>
      {/* {userPermission === permission.PATIENT && menuPatient.map((item) => (
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
      ))} */}
      {TemporaryMenu.map((item) => (
        <NavLink activeClassName='active' key={item.name} to={item.path}>
          <span />
          <div>
            {item.icon}
            {expanded && <span>{item.name}</span>}
          </div>
        </NavLink>
      ))}

    </Container>
  )
}

export default Menu
