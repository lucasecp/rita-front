import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Modal } from './components/Modal'

import Routes from './routes/routes'
import GlobalStyle from './styles/global'

import MenuProvider from './hooks/useMenu'
import AuthProvider from './hooks/login'

import { ModalProvider } from './hooks/useModal'
import { LoadingProvider } from './hooks/useLoading'
import { ThemeProvider } from './hooks/useTheme'
import { RitaLoading } from './components/Loading/RitaLoading'

import { ToastContainer } from 'react-toastify'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <LoadingProvider>
          <AuthProvider>
            <MenuProvider>
              <ThemeProvider>
                <GlobalStyle />
                <Routes />
                <Modal />
                <RitaLoading />
                <ToastContainer />
              </ThemeProvider>
            </MenuProvider>
          </AuthProvider>
        </LoadingProvider>
      </ModalProvider>
    </BrowserRouter>
  )
}

export default App
