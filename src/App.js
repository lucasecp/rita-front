import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes/routes'
import GlobalStyle from './styles/global'
import MenuProvider from './context/Menu'
import AuthProvider from './context/login'
import ModuleProvider from './context/Module'

const App = () => {
  return (
    <ModuleProvider>
    <AuthProvider>
    <MenuProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </MenuProvider>
    </AuthProvider>
    </ModuleProvider>
  )
}

export default App
