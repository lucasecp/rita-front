import React, { useEffect, useState } from 'react'

import { Container, Time } from './styles'
import CustomTooltip from '@/components/Tooltip'
import { ReactComponent as LogoIcon } from '@/assets/logo/symbol.svg'

export const Footer: React.FC = () => {
  const formatDate = () =>
    `${new Date().toLocaleDateString('pt-br')} - ${new Date().getHours()}:${
      new Date().getMinutes() < 10
        ? `0${new Date().getMinutes()} `
        : new Date().getMinutes()
    }`

  const [dateNow, setDate] = useState(formatDate())

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(formatDate())
    }, 30 * 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Container>
<<<<<<< HEAD
      <LogoIcon />
      <CustomTooltip label="v0.18.8.945">
=======
      <img src={logoFooter} />
      <CustomTooltip label="v0.18.16.954">
>>>>>>> d80d48fd7f2500e0a42d7b1a4f5e86644f503604
        <h6>Rita Saúde</h6>
      </CustomTooltip>
      <Time className="text-end">{dateNow}</Time>
    </Container>
  )
}

export default Footer
