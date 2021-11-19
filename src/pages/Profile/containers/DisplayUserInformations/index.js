import React from 'react'
import { Avatar } from './components/Avatar'

import { Container } from './styles'

export const DisplayUserInformations = () => {
  return (
    <Container>
      <Avatar source="https://diariodorio.com/wp-content/plugins/serverdoin-eleicoes/fotos/piaui/floriano/180001205885.jpg" />
      {/* <Avatar /> */}
    </Container>
  )
}
