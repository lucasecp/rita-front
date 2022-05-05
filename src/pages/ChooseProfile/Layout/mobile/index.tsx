import React from 'react'

import { Header } from './Header'

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
      <main>
        <h1>
          {title}
          {headerChildren}
        </h1>
        {children}
      </main>
    </Container>
  )
}
