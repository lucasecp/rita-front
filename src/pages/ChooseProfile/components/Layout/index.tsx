import React from 'react'
import { useMediaPredicate } from 'react-media-hook'

import { MobileLayout } from './mobile'
import { DesktopLayout } from './desktop'

interface DefaultLayoutI {
  headerChildren?: JSX.Element | null
  title: string
}

export const Layout: React.FC<DefaultLayoutI> = ({
  children,
  headerChildren,
  ...rest
}) => {
  const isMobile = useMediaPredicate('(max-width: 767px)')

  const Component = isMobile ? MobileLayout : DesktopLayout

  return (
    <Component headerChildren={headerChildren} {...rest}>
      {children}
    </Component>
  )
}
