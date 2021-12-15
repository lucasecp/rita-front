import React from 'react'
import { Container } from './styles'

import { ReactComponent as HeartIcon } from '@/assets/icons/heart.svg'
import { ReactComponent as MoneyIcon } from '@/assets/icons/money.svg'
import { ReactComponent as PhoneIcon } from '@/assets/icons/phone.svg'
import ServiceSchedule from '../../../components/ServiceSchedule'

const ClinicItemDetails = () => {
  return (
    <Container>
      <ul>
        <li>
          <HeartIcon /> Atendimento: <span>Cardiologia</span>
        </li>
        <li>
          <MoneyIcon /> Valor: <span>Balcão R$ 400,00</span> <span>-</span>
          <span>Rita: R$ 150,00</span>
        </li>
        <li>
          <PhoneIcon />
          <div> Faça seu agendamento: </div>
          <span>(11) 3333-3333</span>
        </li>
      </ul>
      <ServiceSchedule />
    </Container>
  )
}

export default ClinicItemDetails
