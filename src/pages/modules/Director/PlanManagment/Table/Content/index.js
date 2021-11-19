import React from 'react';
import { Container, Status } from './styles';
import Actions from './Actions';
import { showStatus } from '../../helpers/showStatus';

const Content = () => {


  return (
    <Container>
        <ul>
          <li>22/10/2019</li>
          <li>-</li>
          <li>PPA</li>
          <li>Plano Padrão</li>
          <Status type={showStatus('A')}> <span>{showStatus('A')}</span></Status>
          <Actions/>
        </ul>
        <ul>
          <li>22/10/2019</li>
          <li>-</li>
          <li>PPA</li>
          <li>Plano Padrão</li>
          <Status type={showStatus('I')}> <span>{showStatus('I')}</span></Status>
          <Actions/>
        </ul>
        <ul>
          <li>22/10/2019</li>
          <li>-</li>
          <li>PPA</li>
          <li>Plano Padrão</li>
          <Status type={showStatus('P')}> <span>{showStatus('P')}</span></Status>
          <Actions/>
        </ul>
        <ul>
          <li>22/10/2019</li>
          <li>-</li>
          <li>PPA</li>
          <li>Plano Padrão</li>
          <Status type={showStatus('S')}> <span>{showStatus('S')}</span></Status>
          <Actions/>
        </ul>
    </Container>
  );
};


export default Content;