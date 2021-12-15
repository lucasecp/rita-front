import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { PATIENT_SCHEDULE_APPOINTMENT } from '@/routes/constants/namedRoutes/routes'
import React, { useEffect } from 'react'
import Header from './components/Header'
import { Link } from 'react-router-dom'
import { Content } from './styles'
import { ReactComponent as ArrowLeftIcon } from '@/assets/icons/arrow-left2.svg'
import ClinicItem from './components/ClinicItem2'

const DoctorInformation = () => {
  useEffect(() => {
    document.title = 'Rita Saúde | Informações do Médico'
  }, [])
  return (
    <DefaultLayout title="Informações do Especialista">
      <Content>
        <div>
          <Link to={PATIENT_SCHEDULE_APPOINTMENT}>
            <ArrowLeftIcon /> Voltar aos resultados
          </Link>
        </div>
        <Header />
        <h3>Clinicas que atende</h3>
        <ClinicItem />
      </Content>
    </DefaultLayout>
  )
}

export default DoctorInformation
