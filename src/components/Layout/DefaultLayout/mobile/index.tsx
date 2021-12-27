import React from 'react'

import Sidenav from './Sidenav'
import { Header } from './Header'
import Footer from '../../shared/Footer'

import { Container } from './styles'

interface MobileLayoutI {
  title: string
  headerChildren?: JSX.Element | null
}

export const MobileLayout: React.FC<MobileLayoutI> = ({
  title,
  children,
  headerChildren,
}) => {
  return (
    <Container>
      <Header />
      <Sidenav />
      <main>
        <h1>
          {title || 'Page Title'} {headerChildren}
        </h1>
        {children}
      </main>
      <Footer />
    </Container>
  )
}
