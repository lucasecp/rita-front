import React from 'react'
import { useMediaPredicate } from 'react-media-hook'

import { MobileLayout } from './mobile'
import { DesktopLayout } from './desktop'

export const DefaultLayout = ({ children, headerChildren=null , ...rest }) => {
  const isMobile = useMediaPredicate('(max-width: 767px)')

  const Component = isMobile ? MobileLayout : DesktopLayout

  return <Component headerChildren={headerChildren} {...rest}>{children}</Component>
}
