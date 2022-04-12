import React from 'react';
/** Styles */
import { Container } from './styles'
import { Content } from '../styles'
/** Helpers */
import { getUserStorage } from '../../../../../storage/user'
/** Components */
import Header from '../Header'
import CreateSchedule from './CreateSchedule';
/** Hooks */
import { useScheduleSpecialist } from '../hooks'
/** API */
import apiAdmin from '../../../../../services/apiAdmin'
import { useLoading } from '@/hooks/useLoading';
import { fromApi } from '../adapters';

const Main: React.FC = () => {

  const {setSchedule, getSchedules, currentDataClinicAndDoctor, setCurrentDataClinicAndDoctor, setClinics, setSpecialistName } = useScheduleSpecialist()
  const { Loading } = useLoading()

  React.useEffect(() => {
    document.title = 'Rita Saúde | Agenda Profissional'
    getEspecialisty()
  }, [])

  React.useEffect(() => {
    getSchedule()
  }, [getSchedules])

  const getEspecialisty = async () => {
    const result = await apiAdmin.get('/medico/meu-perfil')
    const { id, nomeProfissional: specialistName, clinica: clinics } = result.data
    setCurrentDataClinicAndDoctor({ ...currentDataClinicAndDoctor, idDoctor: id })
    setClinics(clinics)
    setSpecialistName(specialistName)
  }

  const getSchedule = async () => {
    try {
      Loading.turnOn()
      const { data } = await apiAdmin.get(`/medico/agenda`)
      console.log({ agenda: data})
      //setSchedule(fromApi(data, 59))
    } catch (error) {
    } finally {
      Loading.turnOff()
    }
  }


  return (
    <Container>
      <Header />
      <Content>
        <CreateSchedule />
      </Content>
    </Container>
  );
};

export default Main;
