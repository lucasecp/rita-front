import React, { useState, useEffect } from 'react'
import { useMediaPredicate } from 'react-media-hook'

import arrowImg from '@/assets/icons/arrow-left.svg'

import Menu from '../../shared/Menu'

import { Container, Logo } from './style'

const MODE = {
  EXPANDED: 'expanded',
  SHORT: 'short',
}

const Sidenav = () => {
  const [mode, setMode] = useState(MODE.EXPANDED)

  const isExpanded = mode === MODE.EXPANDED
  const isTablet = useMediaPredicate('(max-width: 1200px)')

  useEffect(() => {
    if (isTablet) {
      setMode(MODE.SHORT)
    }
  }, [])

  const toogleShorten = () => {
    if (isExpanded) {
      setMode(MODE.SHORT)
    }

    if (mode === MODE.SHORT && !isTablet) {
      setMode(MODE.EXPANDED)
    }
  }

  return (
    <Container mode={mode}>
      {!isTablet && (
        <div onClick={toogleShorten}>
          <img src={arrowImg} />
        </div>
      )}
      <nav>
        <header>
          <Logo mode={mode} />
        </header>
        <Menu expanded={isExpanded} />
      </nav>
    </Container>
  )
}

export default Sidenav
