import React from 'react'
import { Sidenav } from './Sidenav'
import { Header } from './Header'
import { Container } from './styles'

interface DesktopLayoutI {
  title: string
  headerChildren?: JSX.Element | null
}

export const DesktopLayout: React.FC<DesktopLayoutI> = ({
  title,
  children,
  headerChildren,
}) => {
  return (
    <Container>
      <Header title={title}>{headerChildren}</Header>
      <Sidenav />
      <main>{children}</main>
    </Container>
  )
}
