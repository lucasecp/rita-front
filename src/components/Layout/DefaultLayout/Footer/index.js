import React, { useState } from 'react'

import ContainerBox from '../../Content/ContainerBox'
import logoFooter from '../../../../assets/icons/logoFooter.png'
import { Container, Time, ColBootstrap } from './style'
const Footer = () => {
  const formatDate = () =>
    `${new Date().toLocaleDateString('pt-br')} - ${new Date().getHours()}:${
      new Date().getMinutes() < 10
        ? `0${new Date().getMinutes()} `
        : new Date().getMinutes()
    }`

  const [dateNow, setDate] = useState(formatDate())

  setInterval(() => {
    setDate(formatDate())
  }, 6000)

  return (
    // <Container>
    // <ContainerBox>
    //    <ColBootstrap>
    //      <img src={logoFooter}/>
    //    </ColBootstrap>
    //    <ColBootstrap>
    //      <h6>Rita Saúde</h6>
    //    </ColBootstrap>
    //    <ColBootstrap>
    //     <Time className='text-end'>{dateNow}</Time>
    //    </ColBootstrap>

    // </ContainerBox>
    // </Container>
    <Container>
      <img src={logoFooter} />
      <h6>Rita Saúde</h6>
      <Time className="text-end">{dateNow}</Time>
    </Container>
  )
}

export default Footer
