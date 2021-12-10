import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React from 'react'
import { Content } from './styles'
import { Link } from 'react-router-dom'
import { PATIENT_SCHEDULE_APPOINTMENT } from '@/routes/constants/namedRoutes/routes'
import {ReactComponent as ArrowLeftIcon} from '@/assets/icons/arrow-left2.svg'

const ClinicInformation = () => {
  return (
    <DefaultLayout title="Informações da Clínica">
      <Content>
        <div>
          <Link to={PATIENT_SCHEDULE_APPOINTMENT}><ArrowLeftIcon/> Voltar aos resultados</Link>
        </div>
        <h3>Especialidades que atende</h3>
      </Content>
    </DefaultLayout>
  )
}
export default ClinicInformation
