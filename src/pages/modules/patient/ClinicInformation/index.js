import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useEffect, useState } from 'react'
import { Content, ListItems } from './styles'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { PATIENT_SCHEDULE_APPOINTMENT } from '@/routes/constants/namedRoutes/routes'
import { ReactComponent as ArrowLeftIcon } from '@/assets/icons/arrow-left2.svg'
import Header from './components/Header'
import SpecialtyItem from './components/SpecialtyItem'
import apiPatient from '@/services/apiPatient'
import { fromApi } from './Adapters'
import { useLoading } from '@/hooks/useLoading'

const ClinicInformation = () => {
  const [clinicInfo, setClinicInfo] = useState({})
  const location = useLocation()
  const history = useHistory()

  const { Loading } = useLoading()

  useEffect(() => {
    document.title = 'Rita Saúde | Informações da Clínica'
  }, [])

  useEffect(() => {
    if (!location.state) {
      return history.push(PATIENT_SCHEDULE_APPOINTMENT)
    }
    const getClinic = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiPatient.get(
          `clinica/${location.state.idClinic}/especialidades/medicos`
        )
        setClinicInfo(fromApi(data))
        console.log(fromApi(data))
      } catch (error) {
        console.log(error)
      } finally {
        Loading.turnOff()
      }
    }
    getClinic()
  }, [])

  return (
    <DefaultLayout title="Informações da Clínica">
      <Content>
        <div>
          <Link to={PATIENT_SCHEDULE_APPOINTMENT}>
            <ArrowLeftIcon /> Voltar aos resultados
          </Link>
        </div>
        <Header clinicInfo={clinicInfo} />
        <h3>Especialidades que atende</h3>
        <ListItems>
          {clinicInfo?.specialtys?.map((specialty, index) => (
            <SpecialtyItem key={index} specialtyInfo={specialty} />
          ))}
        </ListItems>
      </Content>
    </DefaultLayout>
  )
}
export default ClinicInformation
