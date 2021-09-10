import React, { createContext, useState, useContext } from 'react'

const ThemeContext = createContext()

export default function MenuProvider({ children }) {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <ThemeContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useMenu() {
  const context = useContext(ThemeContext)
  return context
}
