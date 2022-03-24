import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { ReactComponent as ChevronDownIcon } from '@/assets/icons/chevron-down.svg'
import { ReactComponent as ChevronUpIcon } from '@/assets/icons/chevron-up.svg'
import { Container } from './styles'
import { menuItens } from './_menuItems'

import { useAuth } from '@/hooks/login'
import { useMenu } from '@/hooks/useMenu'

const Menu = ({ expanded }) => {
  const { pathname: routePathname } = useLocation()
  const { user } = useAuth()
  const { closeMenu } = useMenu()
  const [menuToShow, setMenuToShow] = useState([])

  useEffect(() => {
    setMenuToShow([])

    menuItens.forEach((item) => {
      if (!item.permission || user?.permissoes.includes(item.permission)) {
        setMenuToShow((before) => [...before, item])
      }
    })
  }, [])

  function handleMenuItemClick() {
    closeMenu()
  }


  return (
    <Container expanded={expanded}>
      {menuToShow.map((item) =>
        item.children ? (
          <div key={item.path}>
            <NavLink
              activeClassName="active"
              key={item.path}
              to={item.path}
              onClick={() => handleMenuItemClick()}
            >
              <span />
              <div>
                {item.icon}
                {expanded && <span>{item.name}</span>}
              </div>
              {routePathname.startsWith(item.path) ? (
                <ChevronUpIcon />
              ) : (
                <ChevronDownIcon />
              )}
            </NavLink>

            {routePathname.startsWith(item.path) && (
              <div>
                {item.children.map((child) => (
                  <NavLink
                    activeClassName="active"
                    key={child.path}
                    to={child.path}
                    onClick={() => handleMenuItemClick()}
                  >
                    {child.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ) : (
          <NavLink
            activeClassName="active"
            key={item.path}
            to={item.path}
            onClick={() => handleMenuItemClick()}
          >
            <span />
            <div>
              {item.icon}
              {expanded && <span>{item.name}</span>}
            </div>
          </NavLink>
        ),
      )}
    </Container>
  )
}

export default Menu
