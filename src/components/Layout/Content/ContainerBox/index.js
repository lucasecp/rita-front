import React from 'react';
import { Row } from 'react-bootstrap';
import { ContainerBootstrap } from './style';


const ContainerBox = ({children}) => {
  return (
    <ContainerBootstrap >
    <Row >
       {children}
    </Row>
  </ContainerBootstrap>
  );
};



export default ContainerBox;