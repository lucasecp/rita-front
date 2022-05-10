import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Modal } from './components/Modal'
import { Dialog } from './components/Dialog'

import { Routes } from './routes/routes'
import GlobalStyle from './styles/global'

import MenuProvider from './hooks/useMenu'
import AuthProvider from './hooks/login'

import { ModalProvider } from './hooks/useModal'
import { DialogProvider } from './hooks/useDialog'
import { LoadingProvider } from './hooks/useLoading'
import { ThemeProvider } from './hooks/useTheme'
import { RitaLoading } from './components/Loading/RitaLoading'

import { ToastContainer } from 'react-toastify'
import { RegisterPatientProvider } from './pages/Register/RegisterPatient/hooks'
import { PhysicalPersonRegisterProvider } from './pages/Register/physicalPersonRegister/shared/hooks'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <DialogProvider>
          <LoadingProvider>
            <AuthProvider>
              <MenuProvider>
                <ThemeProvider>
                  <GlobalStyle />
                  <RegisterPatientProvider>
                    <PhysicalPersonRegisterProvider>
                      <Routes />
                      <Modal />
                      <Dialog />
                      <RitaLoading />
                      <ToastContainer />
                    </PhysicalPersonRegisterProvider>
                  </RegisterPatientProvider>
                </ThemeProvider>
              </MenuProvider>
            </AuthProvider>
          </LoadingProvider>
        </DialogProvider>
      </ModalProvider>
    </BrowserRouter>
  )
}
