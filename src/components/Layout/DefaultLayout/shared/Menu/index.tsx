import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { ReactComponent as ChevronDownIcon } from '@/assets/icons/chevron-down.svg'
import { ReactComponent as ChevronUpIcon } from '@/assets/icons/chevron-up.svg'
import { Container } from './styles'
import { menuItens } from './_menuItems'

import { useAuth } from '@/hooks/login'
import { useMenu } from '@/hooks/useMenu'

interface MenuProps {
  expanded: boolean
}

export const Menu: React.FC<MenuProps> = ({ expanded }) => {
  const { pathname: routePathname } = useLocation()
  const { user } = useAuth()
  const { closeMenu } = useMenu()
  const [menuToShow, setMenuToShow] = useState([])

  useEffect(() => {
    const menuToShowTemporary = menuItens.filter(
      (menuItem) =>
        !menuItem.permissions ||
        menuItem.permissions?.some((permissionMenuItem) =>
          user?.permissoes.some(
            (permissionUser: string) => permissionUser === permissionMenuItem,
          ),
        ),
    )

    setMenuToShow(menuToShowTemporary)

    // setMenuToShow((before) => [...before, item])

    // if (!item.permission || user?.permissoes.includes(item.permission)) {
    //   setMenuToShow((before) => [...before, item])
    // } else {

    // if (typeof item.permission !== 'string') {
    //   const allowedReports = item.permission.filter((permissionMenuItem) =>
    //     user?.permissoes.some(
    //       (permissionUser: string) => permissionUser === permissionMenuItem,
    //     ),
    //   )

    //   if (allowedReports) {
    //     setMenuToShow((beforeMenuToShow) => [
    //       ...beforeMenuToShow,
    //       item.permission,
    //     ])
    //   }
    // }
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
              onClick={handleMenuItemClick}
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
