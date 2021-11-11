import React, { useState } from 'react'
import { useMediaPredicate } from 'react-media-hook'

import arrowImg from '@/assets/icons/arrow-left.svg'

import Menu from '../../shared/Menu'

import { Container } from './style'
import { useExpanded } from './useExpanded'

export const Sidenav = () => {
  const isTablet = useMediaPredicate('(max-width: 1200px)')
  let initialIsExpanded = false

  if (!isTablet) {
    const isExpandedBefore = JSON.parse(
      localStorage.getItem('@Rita/Menu/Expanded')
    )

    initialIsExpanded = isExpandedBefore === null || isExpandedBefore
  }

  // const [isExpanded, setIsExpanded] = useState(initialIsExpanded)
  const [isExpanded, toogleExpanded] = useExpanded(initialIsExpanded)

  // const toogleShorten = () => {
  //   setIsExpanded(!isExpanded)
  //   localStorage.setItem('@Rita/Menu/Expanded', JSON.stringify(!isExpanded))
  // }

  return (
    <Container isExpanded={isExpanded}>
      {!isTablet && (
        <div onClick={toogleExpanded}>
          <img src={arrowImg} />
        </div>
      )}
      <nav>
        <header>
          <div />
        </header>
        <Menu expanded={isExpanded} />
      </nav>
    </Container>
  )
}
