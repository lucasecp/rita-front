import React from 'react';
/** Styles */
import { Container } from './styles'
import { Content } from '../styles'
/** Helpers */
import { getUserStorage } from '../../../../../storage/user'
/** Components */
import Header from '../Header'
import CreateSchedule from './CreateSchedule';

const Main: React.FC = () => {

  const { nome: specialistName } = getUserStorage()
  document.title = 'Rita Saúde | Agenda Profissional'

  return (
    <Container>
      <Header specialistName={specialistName}/>
      <Content>
        <CreateSchedule specialistName={specialistName}/>
      </Content>
    </Container>
  );
};

export default Main;
