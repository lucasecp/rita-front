import React from 'react';
import { Row } from 'react-bootstrap';
import { ContainerBootstrap,BoxContainer } from './style';


const ContainerBox = ({children, wide}) => {
  return (
    <ContainerBootstrap >
      <BoxContainer wide={wide}>
    <Row >
       {children}
    </Row>
      </BoxContainer>
  </ContainerBootstrap>
  );
};



export default ContainerBox;