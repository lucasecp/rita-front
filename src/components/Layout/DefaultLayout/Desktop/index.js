import React from 'react'
import Sidenav from './Sidenav'
import Header from './Header'
import Footer from './Footer'

import { Container } from './styles'

export const DesktopLayout = ({ title, children }) => {
  return (
    <Container>
      <Header title={title} />
      <Sidenav />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}
