import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes/routes'
import GlobalStyle from './styles/global'
import MenuProvider from './context/Menu'

const App = () => {
  return (
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
  )
}

export default App
