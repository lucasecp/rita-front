import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { PATIENT_SCHEDULE_APPOINTMENT } from '@/routes/constants/namedRoutes/routes'
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { Link } from 'react-router-dom'
import { Content } from './styles'
import { ReactComponent as ArrowLeftIcon } from '@/assets/icons/arrow-left2.svg'
import ClinicItem from './components/ClinicItem'
import apiPatient from '@/services/apiPatient'
import { fromApi } from './adapters/mapDoctorInfo'

const DoctorInformation = () => {
  const [doctorInfo, setDoctorInfo] = useState()

  useEffect(() => {
    document.title = 'Rita Saúde | Informações do Médico'
  }, [])

  useEffect(() => {
    const getDoctor = async () => {
      try {
        const { data } = await apiPatient.get(`/medico/25`)
        setDoctorInfo(fromApi(data))
        console.log(fromApi(data));
      } catch (error) {
        console.log(error)
      }
    }
    getDoctor()
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
        <ClinicItem />
        <ClinicItem />
        <ClinicItem />
      </Content>
    </DefaultLayout>
  )
}

export default DoctorInformation
