import React, { useEffect } from 'react'
import { Container, Content } from './styles'
import { useHistory, useLocation } from 'react-router'
import CreateSchedule from './CreateSchedule'
import Header from './Header'
import { CLINIC_SEE_ALL_SPECIALIST } from '@/routes/constants/namedRoutes/routes'
import { useLoading } from '@/hooks/useLoading'
import { fromApi } from '../adapters'
import apiAdmin from '@/services/apiAdmin'
import { useScheduleSpecialist } from '../hooks'
import Grid from './Grid'

const Main: React.FC = () => {
  const history = useHistory()

  const location = useLocation()

  const { Loading } = useLoading()

  const { schedule,setSchedule, getSchedules, setCurrentDataClinicAndDoctor } =
    useScheduleSpecialist()

  const doctorInfo = {
    name: location.state?.dataDoctor?.name,
    issuingAgency: {
      name: location.state?.dataDoctor?.issuingAgency?.name,
      profissionalRegister:
        location.state?.dataDoctor?.issuingAgency?.profissionalRegister,
    },
  }

  useEffect(() => {
    if (!location.state) {
      return history.push(CLINIC_SEE_ALL_SPECIALIST)
    }

    document.title = 'Rita Saúde | Agenda Profissional'
    // ${location.state?.dataDoctor?.id}
    const getSchedule = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiAdmin.get(
          `clinica/59/medico/${location.state?.dataDoctor?.id}/agenda`,
        )

        setSchedule(fromApi(data, 59))
        setCurrentDataClinicAndDoctor({
          idClinic: 59,
          idDoctor: location.state?.dataDoctor?.id,
        })
      } catch (error) {
      } finally {
        Loading.turnOff()
      }
    }
    getSchedule()
  }, [getSchedules]) 

  return (
    <Container>
      <Header doctorInfo={doctorInfo} />
      <Content>
        <CreateSchedule />
       {schedule.length > 0 && <Grid nameDoctor={doctorInfo.name} />}
      </Content>
    </Container>
  )
}

export default Main
