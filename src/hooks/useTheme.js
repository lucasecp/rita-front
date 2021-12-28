import colors from '@/styles/colors'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './login'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

const ThemeContext = createContext({})

const ThemeProvider = ({ children }) => {
  const { user } = useAuth()
  const [theme, setTheme] = useState({})

  useEffect(() => {
    switch (user?.perfis[0]) {
      case 'Conveniado':
      case 'Diretor':
      case 'Operador':
        setTheme(colors.themeOrange)
        break

      default:
        setTheme(colors.themePurple)
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
