import React, { useState, useEffect } from 'react'
import { useMediaPredicate } from 'react-media-hook'

import arrowImg from '@/assets/icons/arrow-left.svg'

import Menu from '../../shared/Menu'

import { Container } from './style'

const Sidenav = () => {
  const isTablet = useMediaPredicate('(max-width: 1200px)')

  const [isExpanded, setIsExpanded] = useState(!isTablet)

  useEffect(() => {
    // Colocar no local storage
  }, [])

  const toogleShorten = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Container isExpanded={isExpanded}>
      {!isTablet && (
        <div onClick={toogleShorten}>
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

export default Sidenav
