import React from 'react'
import { useMediaPredicate } from 'react-media-hook'

import Footer from './Footer'
import Header from './Header'
import Sidenav from './Sidenav'
import { Container } from './style'
import HeaderMobile from './mobile/Header'
import SidenavMobile from './mobile/Sidenav'
const DefaultLayout = ({ children }) => {
  const isMobile = useMediaPredicate('(max-width: 767px)')

  return (
    <Container>
      {isMobile && <> <HeaderMobile/> <SidenavMobile/> </>}

      {!isMobile && (
        <>
          <Header />
          <Sidenav />
        </>
      )}
      <main>{children}</main>
      <Footer />
    </Container>
  )
}

export default DefaultLayout
