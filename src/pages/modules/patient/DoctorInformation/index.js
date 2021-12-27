import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { PATIENT_SCHEDULE_APPOINTMENT } from '@/routes/constants/namedRoutes/routes'
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { Link} from 'react-router-dom'
import { Content } from './styles'
import { ReactComponent as ArrowLeftIcon } from '@/assets/icons/arrow-left2.svg'
import ClinicItem from './components/ClinicItem'
import apiPatient from '@/services/apiPatient'
import { fromApi } from './adapters/mapDoctorInfo'
import { useLoading } from '@/hooks/useLoading'

const DoctorInformation = () => {
  const [doctorInfo, setDoctorInfo] = useState()
  // const location = useLocation()
  // const history = useHistory()
  const { Loading } = useLoading()

  useEffect(() => {
    document.title = 'Rita Saúde | Informações do Médico'
  }, [])

  useEffect(() => {
    // if (!location.state) {
    //   return history.push(PATIENT_SCHEDULE_APPOINTMENT)
    // }

    const getDoctor = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiPatient.get(`/medico/22`)
        setDoctorInfo(fromApi(data))
      } catch (error) {
        console.log(error)
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
          <Link to={PATIENT_SCHEDULE_APPOINTMENT}>
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
