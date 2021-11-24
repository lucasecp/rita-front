import React from 'react'
import { Avatar } from './components/Avatar'

import logoGif from '@/assets/logo/logo-animate.gif'

import { Container } from './styles'
import TableActive from './components/TableActive'

export const DisplayUserInformations = () => {
  return (
    <Container>
      <Avatar />
      <div>
        CPF:<span>123.456.789-10</span>
      </div>
      <div>
        Plano contratado:<span>Econômico</span>
      </div>
      <section>
        <img src={logoGif} alt="logo animada que representa plano contratado" />
        Plano contratado:<span>Econômico</span>
      </section>
      <TableActive table="default" />
    </Container>
  )
}
