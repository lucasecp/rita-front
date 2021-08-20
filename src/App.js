import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import GlobalStyle from './styles/global'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  )
}

export default App
