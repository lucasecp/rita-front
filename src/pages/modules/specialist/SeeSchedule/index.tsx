import React from 'react'
/** Components */
import { DefaultLayout } from '@/components/Layout/DefaultLayout';
import Main from './Main'

const SeeSchedule: React.FC = () => {
  return (
    <DefaultLayout title='Horário de trabalho profissional'>
      <Main/>
    </DefaultLayout>
  );
};

export default SeeSchedule;
