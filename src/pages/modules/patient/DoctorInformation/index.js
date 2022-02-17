import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { PATIENT_SCHEDULE_APPOINTMENT } from '@/routes/constants/namedRoutes/routes'
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { Content } from './styles'
import { ReactComponent as ArrowLeftIcon } from '@/assets/icons/arrow-left2.svg'
import ClinicItem from './components/ClinicItem'
import apiAdmin from '@/services/apiAdmin'
import { fromApi } from './adapters/mapDoctorInfo'
import { useLoading } from '@/hooks/useLoading'

const DoctorInformation = () => {
  const [doctorInfo, setDoctorInfo] = useState()
  const location = useLocation()
  const history = useHistory()
  const { Loading } = useLoading()
  const prevUrlResults = location.state?.urlPrevResults || ''

  useEffect(() => {
    document.title = 'Rita Saúde | Informações do Médico'
  }, [])

  useEffect(() => {
    if (!location.state) {
      return history.push(PATIENT_SCHEDULE_APPOINTMENT)
    }

    const getDoctor = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiAdmin.get(
          `/medico/${location.state.idDoctor}/clinicas/especialidades`,
        )
        setDoctorInfo(fromApi(data))
      } catch (error) {
      } finally {
        Loading.turnOff()
      }
    }
    getDoctor()
  }, [])

  return (
    <DefaultLayout title="Informações do Especialista">
      <Content>
        <div>
          <Link to={PATIENT_SCHEDULE_APPOINTMENT + prevUrlResults}>
            <ArrowLeftIcon /> Voltar aos resultados
          </Link>
        </div>
        <Header doctorInfo={doctorInfo} />
        <h3>Clínicas que atende</h3>
        {doctorInfo?.clinicdoctor?.map((clinic, index) => (
          <ClinicItem key={index} clinic={clinic} />
        ))}
      </Content>
    </DefaultLayout>
  )
}

export default DoctorInformation
