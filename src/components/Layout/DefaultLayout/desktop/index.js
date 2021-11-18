import React from 'react'
import { Sidenav } from './Sidenav'
import { Header } from './Header'
import Footer from '../../shared/Footer'

import { Container } from './styles'

export const DesktopLayout = ({ title, children,headerChildren }) => {
  return (
    <Container>
      <Header title={title}>{headerChildren}</Header>
      <Sidenav />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}