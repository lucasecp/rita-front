import React from 'react';
import { Container, Content } from '../style';
import AccordionComponent from '@/components/Accordion';
import { AccordionDetails, AccordionSummary } from '@material-ui/core';
import InputFile from '@/components/Form/InputFile/InputFile';
import OutlineButton from '@/components/Button/Outline';
import {documentTip} from '../tips'
import income from '@/assets/img/income.png'

const ProofOfIncome = ({value,setValue}) => {
  return (
    <Container>
    <AccordionComponent expanded={!value}>
    <AccordionSummary>
       <h2>Foto do comprovante de renda</h2>
      </AccordionSummary>
      <AccordionDetails>
      <h3>Faça agora o upload da foto do seu comprovante de renda</h3>
      <Content>
        <div>
          <img src={income}/>
        </div>
        <div>
          <h4>Como tirar a foto:</h4>
          <ul>
           {documentTip.map((tip,index) => <li key={index}>{tip}</li>)}
          </ul>
          <InputFile>
              <OutlineButton>Selecionar Arquivo</OutlineButton>
          </InputFile>
          <span>Tamanho máximo do arquivo: 10MB <br/>Tipos de arquivos aceitos: jpg, jpeg, png ou pdf.</span>
        </div>
        </Content>
      </AccordionDetails>
    </AccordionComponent>
    </Container>
  );
};


export default ProofOfIncome;