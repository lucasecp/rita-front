import React from 'react'
import { useMediaPredicate } from 'react-media-hook'

import { MobileLayout } from './mobile'
import { DesktopLayout } from './desktop'

const DefaultLayout = ({ children, ...rest }) => {
  const isMobile = useMediaPredicate('(max-width: 767px)')

  const Component = isMobile ? MobileLayout : DesktopLayout

  return <Component {...rest}>{children}</Component>
}

export default DefaultLayout
