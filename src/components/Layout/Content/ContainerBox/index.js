import React from 'react';
import { Container,Row } from 'react-bootstrap'
import { BoxContainer } from './style';

const ContainerBox = ({children, wide}) => {
  return (
    <Container fluid='md'>
      <BoxContainer wide={wide}>
    <Row >
       {children}
    </Row>
      </BoxContainer>
  </Container>
  );
};



export default ContainerBox;