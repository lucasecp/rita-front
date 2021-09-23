import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import ModalWithHook from './components/ModalWithHook'

import Routes from './routes/routes'
import GlobalStyle from './styles/global'

import MenuProvider from './context/Menu'
import AuthProvider from './context/login'

import { ModalProvider } from './context/useModal'
import { LoadingProvider } from './context/useLoading'
import LoadingWithHook from './components/LoadingWithHook/RitaLoading'

const App = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <LoadingProvider>
          <AuthProvider>
            <MenuProvider>
              <GlobalStyle />
              <Routes />
              <ModalWithHook />
              <LoadingWithHook />
            </MenuProvider>
          </AuthProvider>
        </LoadingProvider>
      </ModalProvider>
    </BrowserRouter>
  )
}

export default App
