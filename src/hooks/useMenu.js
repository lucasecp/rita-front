import React, { createContext, useState, useContext } from 'react'

const MenuContext = createContext()

export default function MenuProvider({ children }) {
  const [showMenu, setShowMenu] = useState(false)

  const openMenu = () => {
    setShowMenu(true)
  }

  const closeMenu = () => {
    setShowMenu(false)
  }

  return (
    <MenuContext.Provider value={{ showMenu, openMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export function useMenu() {
  const context = useContext(MenuContext)

  return context
}
