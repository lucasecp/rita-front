import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Container } from './styles'
// import menuPatient from '../../menuItems/patient'
// import menuValidator from '../../menuItems/validator'
// import { useAuth } from '@/context/login'
// import permission from '@/routes/constants/permissions'
import { menuItens } from './_menuItems'
import { useAuth } from '@/context/login'

function Menu({ expanded }) {
  const { user } = useAuth()
  const menuToShowTemporary = []

  const [menuToShow, setMenuToShow] = useState([])

  useEffect(() => {
    menuItens.forEach((item) =>
      user.permissoes.forEach((permission) => {
        if (item.permission === permission) {
          menuToShowTemporary.push(item)
        }
      })
    )

    setMenuToShow(menuToShowTemporary)
  }, [])

  return (
    <Container expanded={expanded}>
      {menuToShow.map((item) => (
        <NavLink key={item.path} to={item.path}>
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
