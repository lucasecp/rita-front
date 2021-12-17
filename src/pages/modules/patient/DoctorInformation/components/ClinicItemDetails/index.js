import React from 'react'
import { Container } from './styles'

import { ReactComponent as HeartIcon } from '@/assets/icons/heart.svg'
import { ReactComponent as MoneyIcon } from '@/assets/icons/money.svg'
import { ReactComponent as PhoneIcon } from '@/assets/icons/phone.svg'

import ServiceSchedule from '../../../components/ServiceSchedule'

const ClinicItemDetails = ({ clinicDetails }) => {
  console.log(clinicDetails)
  return (
    <Container>
      <ul>
        <li>
          <HeartIcon /> Atendimento:
          <span>{clinicDetails?.clinic?.description}</span>
        </li>
        <li>
          <MoneyIcon /> Valor:
          <span>Balcão {clinicDetails?.defaultPrice}</span> <span>-</span>
          <span>Rita: {clinicDetails?.ritaPrice}</span>
        </li>
        <li>
          <PhoneIcon />
          <div> Faça seu agendamento: </div>
          <span>{clinicDetails?.clinic.phone}</span>
        </li>
      </ul>

      {!!clinicDetails?.scheduleAppointment.length && (
        <ServiceSchedule dataSchedule={clinicDetails?.scheduleAppointment} />
      )}
    </Container>
  )
}

export default ClinicItemDetails
