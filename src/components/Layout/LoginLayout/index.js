import React from 'react'
import ritaLogoImg from '@/assets/logo/expanded-logo.svg'
import Footer from '../shared/Footer'

import { Container } from './style'

function LayoutExpanded({ children }) {
  return (
    <Container>
      <aside>
        <img src={ritaLogoImg} />
      </aside>
      <main>
        <section>
          <div>{children}</div>
          <Footer />
        </section>
      </main>
    </Container>
  )
}
export default LayoutExpanded
