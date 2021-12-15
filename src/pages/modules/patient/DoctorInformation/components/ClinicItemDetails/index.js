import React from 'react'
import { Container } from './styles'
import { ReactComponent as VerifiedIcon } from '@/assets/icons/verified.svg'
import { ReactComponent as HeartIcon } from '@/assets/icons/heart.svg'
import { ReactComponent as MoneyIcon } from '@/assets/icons/money.svg'
import { ReactComponent as PhoneIcon } from '@/assets/icons/phone.svg'
import ServiceSchedule from '../../../components/ServiceSchedule'

const ClinicItem = () => {
  return (
    <Container>
      <h3>Clinica Cardiológica + Vida</h3>
      <ul>
        <li>
          Av. Médicos do Brasil, 800 - Saúde - Rio de Janeiro/RJ
          <VerifiedIcon />
          <a href="">Como chegar</a>
        </li>
      </ul>
      <ul>
        <li>
          <HeartIcon />
          Atendimento:
          <span>Cardiologia</span>
        </li>
        <li>
          <MoneyIcon />
          Valor:
          <span>Balcão R$ 400,00</span> - <span>Rita: R$ 150,00</span>
        </li>
        <li>
          <PhoneIcon />
          Faça seu agendamento:
          <span>(11) 3333-3333</span>
        </li>
      </ul>
      <ServiceSchedule />
    </Container>
  )
}

export default ClinicItem
