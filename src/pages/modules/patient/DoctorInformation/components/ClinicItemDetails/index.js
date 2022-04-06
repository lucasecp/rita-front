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
        {clinicDetails?.specialtys[0]?.defaultPrice &&
          clinicDetails?.specialtys[0]?.ritaPrice && (
            <li>
              <MoneyIcon /> Valor:
              {clinicDetails?.specialtys[0].defaultPrice && (
                <span>
                  Particular {clinicDetails?.specialtys[0].defaultPrice}
                </span>
              )}
              {clinicDetails?.specialtys[0].ritaPrice && (
                <>
                  <span>-</span>
                  <span>
                    Preço Rita para você:{' '}
                    {clinicDetails?.specialtys[0].ritaPrice}
                  </span>
                </>
              )}
            </li>
          )}
        <li>
          <PhoneIcon />
          <div> Telefone de Agendamento: </div>
          <span>{clinicDetails?.clinic.phone}</span>
        </li>
      </ul>

      <ServiceSchedule dataSchedule={clinicDetails?.scheduleAppointment} />
    </Container>
  )
}

export default ClinicItemDetails
