import React from 'react'
import { useMediaPredicate } from 'react-media-hook'

import Footer from './Footer'
import Header from './Header'
import Sidenav from './Sidenav'
import { CustomContainer } from './style'
import HeaderMobile from './mobile/Header'
import SidenavMobile from './mobile/Sidenav'
import Mobile from './mobile'
import Desktop from './Desktop'

const DefaultLayout = ({ children, title }) => {
  const isMobile = useMediaPredicate('(max-width: 767px)')

  return (
    <CustomContainer>
      {isMobile ? (
        <Mobile html={children} title={title} />
      ) : (
        <Desktop html={children} title={title} />
      )}
      <Footer />
    </CustomContainer>
  )
}

export default DefaultLayout
