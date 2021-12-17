import React from 'react'
import { Container } from './styles'
import { ReactComponent as MoneyIcon } from '@/assets/icons/money.svg'
import { ReactComponent as PhoneIcon } from '@/assets/icons/phone.svg'
import { ReactComponent as VerifiedIcon } from '@/assets/icons/verified.svg'

import ServiceSchedule from '../../../components/ServiceSchedule'

const SpecialtyDetails = ({ dataSpecialtyDetails }) => {
  return (
    <Container>
      <ul>
        <div>
          <li>
            <h6>Conselho Regional:</h6>{' '}
            <span>
              CRM - {dataSpecialtyDetails?.crm} - {dataSpecialtyDetails?.crmUf}{' '}
            </span>
            {dataSpecialtyDetails?.verified && <VerifiedIcon />}
          </li>
          <li>
            <h6>Especialidades: </h6>
            <span>{dataSpecialtyDetails?.specialtyName} - RQE Nº : {dataSpecialtyDetails?.rqe}</span>
          </li>
        </div>
        { dataSpecialtyDetails?.defaultPrice && dataSpecialtyDetails?.ritaPrice &&
        <li>
          <MoneyIcon /> <h6>Valor:</h6>
          {dataSpecialtyDetails?.defaultPrice && (
            <span>Balcão {dataSpecialtyDetails?.defaultPrice}</span>
          )}
          {dataSpecialtyDetails?.defaultPrice && (
            <>
              <span>-</span> <span>Rita {dataSpecialtyDetails?.ritaPrice}</span>
            </>
          )}
        </li>}
        <li>
          <PhoneIcon /> <h6>Faça o seu agendamento:</h6>
          <span>{dataSpecialtyDetails?.phone}</span>
        </li>
      </ul>
      {!!dataSpecialtyDetails?.schedule.length && <ServiceSchedule dataSchedule={dataSpecialtyDetails?.schedule}/>}
    </Container>
  )
}
export default SpecialtyDetails
