import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useEffect, useState } from 'react'
import { Content, ListItems } from './styles'
import { Link } from 'react-router-dom'
import { PATIENT_SCHEDULE_APPOINTMENT } from '@/routes/constants/namedRoutes/routes'
import { ReactComponent as ArrowLeftIcon } from '@/assets/icons/arrow-left2.svg'
import Header from './components/Header'
import SpecialtyItem from './components/SpecialtyItem'
import apiPatient from '@/services/apiPatient'
import {fromApi} from './adapters/mapClinicInfo'
import { useLoading } from '@/hooks/useLoading'

const ClinicInformation = () => {
  const [clinicInfo, setClinicInfo] = useState({});

  const {Loading} = useLoading()

  useEffect(() => {
    document.title = 'Rita Saúde | Informações da Clínica'
  }, [])

  useEffect(() => {
    const getClinic = async () => {
      try{
        Loading.turnOn()
        const {data} = await apiPatient.get(`clinica/1/especialidades/medicos`)
        setClinicInfo(fromApi(data))
      }
      catch(error){
        console.log(error)
      }
      finally{
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
        <Header clinicInfo={clinicInfo}/>
        <h3>Especialidades que atende</h3>
        <ListItems>
        <SpecialtyItem />
        <SpecialtyItem />
        <SpecialtyItem />
        </ListItems>
      </Content>
    </DefaultLayout>
  )
}
export default ClinicInformation
