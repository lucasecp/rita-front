import React from 'react'
import ritaLogoImg from '@/assets/logo/expanded-logo.svg'
import Footer from '../shared/Footer'

import { Container } from './styles'

function LayoutExpanded({ children }) {
  return (
    <Container>
      <aside>
        <img src={ritaLogoImg} />
      </aside>
      <main>
        <div>{children}</div>
        <Footer />
      </main>
    </Container>
  )
}
export default LayoutExpanded
