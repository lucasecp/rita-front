import React from 'react'
/** Styles */
import { Container } from './styles'
import { Content } from '../styles'
/** Components */
import CreateSchedule from './CreateSchedule'
import Grid from './Grid'
/** Hooks */
import { useScheduleSpecialist } from '../hooks'
/** API */
import apiAdmin from '../../../../../services/apiAdmin'
import { useLoading } from '@/hooks/useLoading'
import { fromApi } from '../adapters'

const Main: React.FC = () => {
  const {
    setSchedule,
    getSchedules,
    currentDataClinicAndDoctor,
    setCurrentDataClinicAndDoctor,
    setClinics,
    setSpecialistName,
  } = useScheduleSpecialist()
  const { Loading } = useLoading()

  const getEspecialisty = async () => {
    const result = await apiAdmin.get('/medico/meu-perfil')
    const {
      id,
      nomeProfissional: specialistName,
      clinica: clinics,
    } = result.data
    setCurrentDataClinicAndDoctor({
      ...currentDataClinicAndDoctor,
      idDoctor: id,
      idClinic: clinics[0].idClinica,
    })
    setClinics(clinics)
    setSpecialistName(specialistName)
  }

  React.useEffect(() => {
    document.title = 'Rita Saúde | Agenda Profissional'
    getEspecialisty()
  }, [])

  const getSchedule = async () => {
    try {
      Loading.turnOn()
      const { data } = await apiAdmin.get(`/medico/agenda`)
      setSchedule(fromApi(data))
    } catch (error) {
    } finally {
      Loading.turnOff()
    }
  }

  React.useEffect(() => {
    getSchedule()
  }, [getSchedules])

  return (
    <Container>
      <Content>
        <CreateSchedule />
        <Grid />
      </Content>
    </Container>
  )
}

export default Main
