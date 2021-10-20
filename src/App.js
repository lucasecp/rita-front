import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Modal from './components/Modal'

import Routes from './routes/routes'
import GlobalStyle from './styles/global'

import MenuProvider from './context/Menu'
import AuthProvider from './context/login'

import { ModalProvider } from './context/useModal'
import { LoadingProvider } from './context/useLoading'
import LoadingWithHook from './components/LoadingWithHook/RitaLoading'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import '@/services/axios.config'

const App = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <LoadingProvider>
          <AuthProvider>
            <MenuProvider>
              <GlobalStyle />
              <Routes />
              <Modal />
              <LoadingWithHook />
              <ToastContainer />
            </MenuProvider>
          </AuthProvider>
        </LoadingProvider>
      </ModalProvider>
    </BrowserRouter>
  )
}

export default App
