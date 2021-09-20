import Footer from '@/components/Layout/DefaultLayout/Footer'
import React from 'react'
import { useMediaPredicate } from 'react-media-hook'
import { Container } from './style'

function LayoutExpanded({ children }) {
  const isMobile = useMediaPredicate('(max-width: 767px)')
  return (
    <>
      <Container>
        <aside>
          <div />
          {/* <img src={isMobile ? expandedLogo : logoRitaVertical} /> COLOCAR A LOGO DA IMAGEM */}
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
