import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { PATIENT_SCHEDULE_APPOINTMENT } from '@/routes/constants/namedRoutes/routes'
<<<<<<< HEAD:src/pages/modules/patient/DoctorInformation/Index.js
import React, { useEffect } from 'react'
=======
import React from 'react'
import Header from './components/Header'
>>>>>>> 6d2fa739bdf7ebeb2762079bfb3b6fdc25ac8134:src/pages/modules/patient/DoctorInformation/index.js
import { Link } from 'react-router-dom'
import { Content } from './styles'
import { ReactComponent as ArrowLeftIcon } from '@/assets/icons/arrow-left2.svg'
import ClinicItem from './components/ClinicItem'
import ClinicItemDetails from './components/ClinicItemDetails'

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
        <ClinicItemDetails />
      </Content>
    </DefaultLayout>
  )
}

export default DoctorInformation
