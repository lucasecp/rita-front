import React from 'react';
import DoctorInfo from '../components/DoctorInfo';
import { Container,Content } from './styles';

const Results = () => {
  return (
    <Container>
       <h2>Resultados encontrados</h2>
       <Content>
         <DoctorInfo/>
         <DoctorInfo/>
         <DoctorInfo/>
       </Content>
    </Container>
  );
};


export default Results;