import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import ModalWithHook from './components/ModalWithHook'

import Routes from './routes/routes'
import GlobalStyle from './styles/global'

import MenuProvider from './context/Menu'
import AuthProvider from './context/login'
import ModuleProvider from './context/Module'

import { ModalProvider } from './context/useModal'

const App = () => {
  return (
    <BrowserRouter>
      <ModuleProvider>
        <AuthProvider>
          <ModalProvider>
            <MenuProvider>
              <GlobalStyle />
              <Routes />
              <ModalWithHook />
            </MenuProvider>
          </ModalProvider>
        </AuthProvider>
      </ModuleProvider>
    </BrowserRouter>
  )
}

export default App
