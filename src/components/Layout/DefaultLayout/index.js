import React from 'react'
import { useMediaPredicate } from 'react-media-hook'

import Footer from './Footer'
import Header from './Header'
import Sidenav from './Sidenav'
import { CustomContainer } from './style'
import HeaderMobile from './mobile/Header'
import SidenavMobile from './mobile/Sidenav'

const DefaultLayout = ({ children, title }) => {
  const isMobile = useMediaPredicate('(max-width: 767px)')

  return (
    <CustomContainer>
      {isMobile && (
        <>
          <HeaderMobile /> <SidenavMobile />{' '}
        </>
      )}

      {!isMobile && (
        <>
          <Header title={title} />
          <Sidenav />
        </>
      )}
      <main>
        {isMobile && <h1>{title || 'Page Title'}</h1>}
        {children}
      </main>
      <Footer />
    </CustomContainer>
  )
}

export default DefaultLayout
