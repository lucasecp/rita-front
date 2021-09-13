import React from 'react';
import { AccordionDetails, AccordionSummary } from '@material-ui/core';
import { Container, Content } from '../style';
import AccordionComponent from '@/components/Accordion';
import InputFile from '@/components/Form/InputFile1/InputFile';
import OutlineButton from '@/components/Button/Outline';
import {documentTip} from '../tips'
import document from '@/assets/img/document.png'
const OwnDocument = ({value,setValue}) => {
  return (
    <Container>
    <AccordionComponent expanded={!value}>
    <AccordionSummary>
       <h2>Foto do documento de identificação</h2>
      </AccordionSummary>
      <AccordionDetails>
      <h3>Faça agora o upload da foto do seu documento de identificação que contenha o seu CPF</h3>
        <Content>
        <div>
          <img src={document}/>
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


export default OwnDocument;