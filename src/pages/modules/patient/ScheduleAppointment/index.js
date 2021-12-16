import React, { useEffect } from 'react';
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { Content } from './styles';
import Filters from './Filters';

const ScheduleAppointment = () => {
  useEffect(() => {
    document.title = 'Rita Saúde | Agende sua Consulta'
  }, [])

  return (
    <DefaultLayout title='Agende sua Consulta'>
      <Content>
       <Filters/>
      </Content>
    </DefaultLayout>
  );
};


export default ScheduleAppointment;