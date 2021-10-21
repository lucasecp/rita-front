import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Container } from './styles'
import { useAuth } from '@/hooks/login'

import { menuItens } from './_menuItems'

function Menu({ expanded }) {
  const { user } = useAuth()
  const menuToShowTemporary = []

  const [menuToShow, setMenuToShow] = useState([])

  useEffect(() => {
    menuItens.forEach((item) => {
      if (!item.permission || user.permissoes.indexOf(item.permission) >= 0) {
        menuToShowTemporary.push(item)
      }
    })

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
