import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'
import GlobalStyle from './styles/global'
import MenuProvider from './context/Menu'

const App = () => {
  return (
    <MenuProvider>
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
    </MenuProvider>
  )
}

export default App
