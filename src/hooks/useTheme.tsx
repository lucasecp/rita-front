import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './login'
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from 'styled-components'

import { themes } from '@/styles/themes'
import { profiles } from '@/constants/profiles'

interface ThemeContextData {
  theme: DefaultTheme
}

const ThemeContext = createContext({} as ThemeContextData)

const ThemeProvider: React.FC = ({ children }) => {
  const { user } = useAuth()
  const [theme, setTheme] = useState({} as DefaultTheme)

  useEffect(() => {
    if (user?.profileChosen === profiles['Clinica/Especialista']) {
      setTheme(themes.green)
    } else if (user?.profileChosen === profiles.Funcionario) {
      setTheme(themes.blue)
    } else if (user?.profileChosen === profiles.Empresa) {
      setTheme(themes.orange)
    } else {
      setTheme(themes.purple)
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
