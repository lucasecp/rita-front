import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import ModalWithHook from './components/ModalWithHook'

import Routes from './routes/routes'
import GlobalStyle from './styles/global'

import MenuProvider from './context/Menu'
import { ModalProvider } from './context/useModal'

const App = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <MenuProvider>
          <GlobalStyle />
          <Routes />
          <ModalWithHook />
        </MenuProvider>
      </ModalProvider>
    </BrowserRouter>
  )
}

export default App
