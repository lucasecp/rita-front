import React from 'react'
import logoRitaVertical from '@/assets/logo/vertical-named-logo.svg'
import Footer from '@/components/Layout/DefaultLayout/Footer'

import { Container } from './styles'

function RegisterLayout({ children }) {
  return (
    <Container>
      <aside>
        <div />
        <img src={logoRitaVertical} />
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

export default RegisterLayout
