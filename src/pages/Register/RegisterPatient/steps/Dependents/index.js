import AccordionComponent from '@/components/Accordion';
import OutlineButton from '@/components/Button/Outline';
import { AccordionSummary } from '@material-ui/core';
import React, { useState } from 'react';
import { Container } from '../style'
import Dep1 from './Dep1';
import Dep2 from './Dep2';
import { Content } from './style';
const Dependents = () => {
  const [showDep1, setShowDep1] = useState(false);
  const [showDep2, setShowDep2] = useState(false);
  return (
    <Container>
      {!showDep1 && !showDep2 &&
      <Content>
        <h2>Dependentes</h2>
        <OutlineButton variation='blue' onClick={() => setShowDep1(true)}>Adicionar Dependentes</OutlineButton>
      </Content>
      }

      <AccordionComponent expanded={showDep1}>
        <AccordionSummary style={{display:'none'}}></AccordionSummary>
        <Dep1 showDep2={showDep2} setShowDep2={setShowDep2} setShowDep1={setShowDep1}/>
        </AccordionComponent>

      <AccordionComponent expanded={showDep2}>
        <AccordionSummary style={{display:'none'}}></AccordionSummary>
          <Dep2 setShowDep2={setShowDep2}/>
        </AccordionComponent>
    </Container>
  );
};

export default Dependents;