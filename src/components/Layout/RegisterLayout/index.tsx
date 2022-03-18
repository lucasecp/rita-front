import React from 'react'
import logoRitaVertical from '@/assets/logo/vertical-named-logo.svg'
import Footer from '../shared/Footer'

import expandedLogo from '@/assets/logo/expanded-logo.svg'

import { Container } from './styles'
import { useMediaPredicate } from 'react-media-hook'

export const RegisterLayout: React.FC = ({ children }) => {
  const isMobile = useMediaPredicate('(max-width: 767px)')

  return (
    <Container>
      <aside>
        <div />
        <img src={isMobile ? expandedLogo : logoRitaVertical} />
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
