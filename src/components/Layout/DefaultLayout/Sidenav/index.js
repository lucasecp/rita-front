import React, { useState } from 'react'

import arrowLeftImg from '../../../../assets/icons/arrow-left.svg'
import arrowRightImg from '../../../../assets/icons/arrow-right.svg'

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
    if (mode === MODE.EXPANDED) {
      setMode(MODE.SHORT)
    }

    if (mode === MODE.SHORT) {
      setMode(MODE.EXPANDED)
    }
  }

  return (
    <Container>
      <nav>
        <img
          src={MODE.EXPANDED ? arrowLeftImg : arrowRightImg}
          onClick={toogleShorten}
        />
        <header>
          <img src={MODE.EXPANDED ? expandedLogo : iconLogo} />
        </header>
        <Menu />
      </nav>
    </Container>
  )
}

export default Sidenav
