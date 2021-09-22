import React, { createContext, useState, useContext } from 'react'

const MenuContext = createContext()

export default function MenuProvider({ children }) {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <MenuContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export function useMenu() {
  const context = useContext(MenuContext)
  
  return context
}
