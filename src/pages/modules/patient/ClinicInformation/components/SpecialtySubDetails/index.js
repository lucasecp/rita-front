import React from 'react'
import { Container } from './styles'
import { ReactComponent as MoneyIcon } from '@/assets/icons/money.svg'
import { ReactComponent as PhoneIcon } from '@/assets/icons/phone.svg'
import { ReactComponent as VerifiedIcon } from '@/assets/icons/verified.svg'

import ServiceSchedule from '../../../components/ServiceSchedule'

const SpecialtyDetails = () => {
  return (
    <Container>
      <ul>
        <div>
          <li>Conselho Regional:  <span>CRM - 12345 - RJ </span><VerifiedIcon/></li>
          <li>Especialidades: <span>Alergista - RQE Nº: 1933</span></li>
        </div>
        <li><MoneyIcon/> Valor: <span>Balcão R$ 400,00</span> - <span>Rita R$ 150,00</span></li>
        <li><PhoneIcon/> Faça o seu agendamento: <span>(11) 3445-8765</span></li>
      </ul>
        <ServiceSchedule/>
    </Container>
  )
}
export default SpecialtyDetails
