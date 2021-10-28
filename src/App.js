import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Modal from './components/Modal'

import Routes from './routes/routes'
import GlobalStyle from './styles/global'

import MenuProvider from './hooks/useMenu'
import AuthProvider from './hooks/login'

import { ModalProvider } from './hooks/useModal'
import { LoadingProvider } from './hooks/useLoading'
import LoadingWithHook from './components/Loading/RitaLoading'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import {getUserStorage} from '@/storage/user'
import apiPatient from '@/services/apiPatient'
import apiUser from '@/services/apiUser'


const user = getUserStorage()


apiUser.defaults.headers.token = user?.token
apiPatient.defaults.headers.token = user?.token


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
