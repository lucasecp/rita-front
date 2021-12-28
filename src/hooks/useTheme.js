import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './login'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { themes } from '@/styles/themes'

const ThemeContext = createContext({})

const ThemeProvider = ({ children }) => {
  const { user } = useAuth()
  const [theme, setTheme] = useState({})

  useEffect(() => {
    switch (user?.perfis[0]) {
      case 'Paciente':
        setTheme(themes.purple)
        break
      case 'Conveniado':
        setTheme(themes.orange)
        break
      case 'Validador':
      case 'Operador':
      case 'Diretor':
      case 'Gerente Comercial':
      case 'Gestor de Contas':
        setTheme(themes.blue)
        break

      default:
        setTheme(themes.green)
    }
  }, [user])

  return (
    <StyledThemeProvider theme={theme}>
      <ThemeContext.Provider
        value={{
          theme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext)

  return context
}

export { ThemeProvider, useTheme }
