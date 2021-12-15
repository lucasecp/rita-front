import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useEffect } from 'react'
import { Content } from './styles'
import { Link } from 'react-router-dom'
import { PATIENT_SCHEDULE_APPOINTMENT } from '@/routes/constants/namedRoutes/routes'
import { ReactComponent as ArrowLeftIcon } from '@/assets/icons/arrow-left2.svg'
import Header from './components/Header'
import SpecialtyItem from './components/SpecialtyItem'
import SpecialtyDetails from './components/SpecialtyDetails'
import SpecialtySubDetails from './components/SpecialtySubDetails'
import ServiceSchedule from '../components/ServiceSchedule'

const ClinicInformation = () => {
  useEffect(() =>{
    document.title = 'Rita Saúde | Informações da Clínica'
  }, [])
  return (
    <DefaultLayout title="Informações da Clínica">
      <Content>
        <div>
          <Link to={PATIENT_SCHEDULE_APPOINTMENT}>
            <ArrowLeftIcon /> Voltar aos resultados
          </Link>
        </div>
        <Header />
        <h3>Especialidades que atende</h3>
        <SpecialtyItem />
        <SpecialtyDetails />
        <SpecialtySubDetails />
        <h3>Especialidades que atende</h3>
        <ServiceSchedule />
        <SpecialtyItem/>

      </Content>
    </DefaultLayout>
  )
}
export default ClinicInformation
