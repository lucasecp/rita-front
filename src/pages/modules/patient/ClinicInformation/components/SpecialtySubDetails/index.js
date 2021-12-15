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
          <li><h6>Conselho Regional:</h6>  <span>CRM - 12345 - RJ </span><VerifiedIcon/></li>
          <li><h6>Especialidades: </h6><span>Alergista - RQE Nº: 1933</span></li>
        </div>
        <li><MoneyIcon/> <h6>Valor:</h6> <span>Balcão R$ 400,00</span> <span>-</span> <span>Rita R$ 150,00</span></li>
        <li><PhoneIcon/> <h6>Faça o seu agendamento:</h6> <span>(11) 3445-8765</span></li>
      </ul>
        <ServiceSchedule/>
    </Container>
  )
}
export default SpecialtyDetails
