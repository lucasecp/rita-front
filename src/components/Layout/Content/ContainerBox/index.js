import React from 'react';
import { Container,Row } from 'react-bootstrap'

const ContainerBox = ({children, wide}) => {
  return (
    <Container fluid='md'>
       {children}
  </Container>
  );
};



export default ContainerBox;