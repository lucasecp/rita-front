import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'
import menuItems from './MenuItems'

function Menu() {
  return (
    <Container >
      {menuItems.map((item) => (
        <li key={item.name}>
          <span />
          <div>
            {item.icon}
         <Link to={item.path}>{item.name}</Link>
          </div>
        </li>
      ))}
    </Container>
  )
}

export default Menu
