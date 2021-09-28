import React, { useEffect, useState } from 'react'

import logoFooter from '@/assets/logo/symbol.svg'
import { Container, Time } from './styles'

const Footer = () => {
  const formatDate = () =>
    `${new Date().toLocaleDateString('pt-br')} - ${new Date().getHours()}:${
      new Date().getMinutes() < 10
        ? `0${new Date().getMinutes()} `
        : new Date().getMinutes()
    }`

  const [dateNow, setDate] = useState(formatDate())

  useEffect(() => {
    return () => clearInterval(interval)
  }, [])

  const interval = setInterval(() => {
    setDate(formatDate())
  }, 6000)

  return (
    <Container>
      <img src={logoFooter} />
      <h6>Rita Saúde</h6>
      <Time className="text-end">{dateNow}</Time>
    </Container>
  )
}

export default Footer
