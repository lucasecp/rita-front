import React from 'react';
import DoctorInfo from '../components/DoctorInfo';
import ClinicInfo from '../components/ClinicInfo';
import { Container,Content } from './styles';
import Pagination from '@/components/Pagination/'

const Results = () => {
  return (
    <Container>
       <h2>Resultados encontrados</h2>
       <Content>
         <DoctorInfo isVerify/>
         <ClinicInfo/>
         <DoctorInfo/>

       </Content>
       <Pagination/>
    </Container>
  );
};


export default Results;