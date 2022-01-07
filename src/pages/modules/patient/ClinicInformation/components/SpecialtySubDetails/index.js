import React, { useEffect } from 'react'
import {
  Container,
  MainInfo,
  Price,
  RitaPrice,
  DefaultPrice,
  Phone,
  ContainerMainInfo,
} from './styles'
import { ReactComponent as MoneyIcon } from '@/assets/icons/money.svg'
import { ReactComponent as PhoneIcon } from '@/assets/icons/phone.svg'
import { ReactComponent as VerifiedIcon } from '@/assets/icons/verified.svg'

import ServiceSchedule from '../../../components/ServiceSchedule'
import CustomTooltip from '@/components/Tooltip'

const SpecialtyDetails = ({ dataSpecialtyDetails }) => {

  return (
    <Container>
      <ul>
        <ContainerMainInfo>
          <MainInfo>
            <h6>Conselho Regional:</h6>{' '}
            <span>
              CRM - {dataSpecialtyDetails?.crm} - {dataSpecialtyDetails?.crmUf}{' '}
            </span>
            {dataSpecialtyDetails?.verified && (
              <CustomTooltip label="Verificado">
                <VerifiedIcon />
              </CustomTooltip>
            )}
          </MainInfo>

          <MainInfo>
            <h6>Especialidades: </h6>
            <span>
              {dataSpecialtyDetails?.specialtyName} - RQE Nº :{' '}
              {dataSpecialtyDetails?.rqe}
            </span>
          </MainInfo>
        </ContainerMainInfo>

        {dataSpecialtyDetails?.defaultPrice && dataSpecialtyDetails?.ritaPrice && (
          <Price>
            <MoneyIcon /> <h6>Valor:</h6>
            {dataSpecialtyDetails?.defaultPrice && (
              <DefaultPrice>
                Balcão {dataSpecialtyDetails?.defaultPrice}
              </DefaultPrice>
            )}
            {dataSpecialtyDetails?.defaultPrice && (
              <>
                <span>-</span>
                <RitaPrice>Rita {dataSpecialtyDetails?.ritaPrice}</RitaPrice>
              </>
            )}
          </Price>
        )}
        {dataSpecialtyDetails?.phone && (
          <Phone>
            <PhoneIcon /> <h6>Telefone de Agendamento:</h6>
            <span>{dataSpecialtyDetails?.phone}</span>
          </Phone>
        )}
      </ul>

      <ServiceSchedule dataSchedule={dataSpecialtyDetails?.schedule} />
    </Container>
  )
}
export default SpecialtyDetails
