import React from 'react'

import Sidenav from './Sidenav'
import Header from './Header'
import Footer from './Footer'

import { Container } from './styles'

export const MobileLayout = ({ title, children }) => {
  return (
    <Container>
      <Header />
      <Sidenav />
      <main>
        <h1>{title || 'Page Title'}</h1>
        {children}
      </main>
      <Footer />
    </Container>
  )
}
