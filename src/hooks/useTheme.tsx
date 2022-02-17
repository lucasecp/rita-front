import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './login'
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from 'styled-components'

import { themes } from '@/styles/themes'

interface ThemeContextData {
  theme: DefaultTheme
}

const ThemeContext = createContext({} as ThemeContextData)

const ThemeProvider: React.FC = ({ children }) => {
  const { user } = useAuth()
  const [theme, setTheme] = useState({} as DefaultTheme)

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
      case 'Gestor da Plataforma':
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
