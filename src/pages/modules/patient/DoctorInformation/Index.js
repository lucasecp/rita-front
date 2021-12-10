import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { PATIENT_SCHEDULE_APPOINTMENT } from '@/routes/constants/namedRoutes/routes'
import React from 'react'
import { Link } from 'react-router-dom'
import { Content } from './Styles'
import { ReactComponent as ArrowLeftIcon } from '@/assets/icon/arrow-left2.svg'

const DoctorInformation = () => {
  return (
    <DefaultLayout title="Informações do Especialista">
      <Content>
        <div>
          <Link to={PATIENT_SCHEDULE_APPOINTMENT}>
            <ArrowLeftIcon /> Voltar aos resultados
          </Link>
        </div>
        <h3>Clinicas que atende</h3>
      </Content>
    </DefaultLayout>
  )
}

export default DoctorInformation
