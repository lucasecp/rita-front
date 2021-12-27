import React from 'react'
import { useMediaPredicate } from 'react-media-hook'
import { ReactComponent as ExpandedLogo } from '@/assets/logo/expanded-logo.svg'
import { ReactComponent as IconLogo } from '@/assets/logo/icon-logo.svg'

import arrowImg from '@/assets/icons/arrow-left.svg'

import Menu from '../../shared/Menu'

import { Container } from './style'
import { useExpanded } from './useExpanded'

export const Sidenav = () => {
  const isTablet = useMediaPredicate('(max-width: 1200px)')
  let initialIsExpanded = false

  if (!isTablet) {
    const isExpandedBefore = JSON.parse(
      localStorage.getItem('@Rita/Menu/Expanded'),
    )

    initialIsExpanded = isExpandedBefore === null || isExpandedBefore
  }

  const [isExpanded, toogleExpanded] = useExpanded(initialIsExpanded)

  return (
    <Container isExpanded={isExpanded}>
      <div onClick={toogleExpanded}>
        <img src={arrowImg} />
      </div>
      <nav>
        <header>
          {/* <div /> */}
          {isExpanded ? <ExpandedLogo /> : <IconLogo />}
        </header>
        <Menu expanded={isExpanded} />
      </nav>
    </Container>
  )
}
