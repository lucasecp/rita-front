import React, { useState } from 'react'

import arrowImg from '../../../../assets/icons/arrow-left.svg'

import expandedLogo from '../../../../assets/logo/expanded-logo.svg'
import iconLogo from '../../../../assets/logo/icon-logo.svg'

import Menu from './Menu'

import { Container } from './style'

const MODE = {
  EXPANDED: 'expanded',
  SHORT: 'short',
  HIDDEN: 'hidden',
}

const Sidenav = () => {
  const [mode, setMode] = useState(MODE.EXPANDED)

  const toogleShorten = () => {
    console.log(mode)

    if (mode === MODE.EXPANDED) {
      setMode(MODE.SHORT)
    }

    if (mode === MODE.SHORT) {
      setMode(MODE.EXPANDED)
    }
  }

  return (
    <Container mode={mode}>
      <div onClick={toogleShorten}>
        <img src={arrowImg} />
      </div>
      <nav>
        <header>
          <img src={mode === MODE.EXPANDED ? expandedLogo : iconLogo} />
        </header>
        <Menu expanded={mode === MODE.EXPANDED} />
      </nav>
    </Container>
  )
}

export default Sidenav
