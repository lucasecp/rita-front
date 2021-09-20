import Footer from '@/components/Layout/DefaultLayout/Footer'
import React from 'react'
import { useMediaPredicate } from 'react-media-hook'
import ritaLogoImg from '@/assets/logo/expanded-logo.svg'
import { Container } from './style'

function LayoutExpanded({ children }) {
  const isMobile = useMediaPredicate('(max-width: 767px)')
  return (
    <>
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
    </>
  )
}
export default LayoutExpanded
