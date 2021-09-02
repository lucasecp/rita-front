import React from 'react'
import { useMediaPredicate } from 'react-media-hook'

import Footer from './Footer'
import Header from './Header'
import Sidenav from './Sidenav'
import { CustomContainer } from './style'
import HeaderMobile from './mobile/Header'
import SidenavMobile from './mobile/Sidenav'
import { Container } from 'react-bootstrap'
const DefaultLayout = ({ children }) => {
  const isMobile = useMediaPredicate('(max-width: 767px)')

  return (
    <CustomContainer>
      {isMobile && <> <HeaderMobile/> <SidenavMobile/> </>}

      {!isMobile && (
        <>
          <Header />
          <Sidenav />
        </>
      )}
      <main>
         {children}
        </main>
      <Footer />
    </CustomContainer>
  )
}

export default DefaultLayout
