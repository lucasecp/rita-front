import React, { useEffect, useState } from 'react';
import { AccordionDetails, AccordionSummary } from '@material-ui/core';
import { Container,Content, ContentFile } from '../style';
import AccordionComponent from '@/components/Accordion';
import selfie from '@/assets/img/selfie.png'
import trash from '@/assets/img/trash.png'
import {holdingDocumentTips} from '../tips'
import InputFile from '@/components/Form/InputFile/InputFile';
import OutlineButton from '@/components/Button/Outline';
import Modal from '@/components/Modal';
import BigSize from '../../messages/BigSize';
import InvalidFormat from '../../messages/InvalidFormat';

const HoldingDocument = ({setValue,value}) => {
  const [showModal,setShowModal] = useState(false)
  const [messages,setMessages] = useState(null)
  const setModalMessages = (Message) =>{
    setShowModal(true)
     setMessages(<Message onShowModal={setShowModal}/>)
  }
  useEffect(()=>{
    if(!value) return
    const fileType = value.type.split('/')[1]
    const fileSize = value.size / (1024*1024).toFixed(2);
    if(fileType !== 'jpg' && fileType !== 'jpeg'
     && fileType !== 'png' && fileType !== 'pdf') {
        setModalMessages(InvalidFormat)
        return setValue('')
      }
    if(fileSize > 10) {
        setModalMessages(BigSize)
        return setValue('')
      }
  },[value])


  return (
    <Container>
    <AccordionComponent expanded={!value}>
      <AccordionSummary>
       <h2>Foto segurando o documento de identificação</h2>
       {value && value.name &&
       <ContentFile>
       <span>{value.name}</span>
       <button onClick={()=> setValue('')}> <img src={trash}/>Remover o arquivo</button>
       </ContentFile>
}
      </AccordionSummary>
      <AccordionDetails>
        <h3>Faça aqui o upload da sua foto segurando o documento de identificação que contenha o seu CPF:</h3>
        <Content>
        <div>
          <img src={selfie}/>
        </div>
        <div>
          <h4>Como tirar a foto:</h4>
          <ul>
           {holdingDocumentTips.map((tip,index) => <li key={index}>{tip}</li>)}
          </ul>
          <InputFile setValue={setValue}  >
              <OutlineButton>Selecionar Arquivo</OutlineButton>
          </InputFile>
          <span>Tamanho máximo do arquivo: 10MB <br/>Tipos de arquivos aceitos: jpg, jpeg, png ou pdf.</span>
        </div>
        </Content>
      </AccordionDetails>
  </AccordionComponent>
  <Modal show={showModal}>{messages}</Modal>
    </Container>
  );
};


export default HoldingDocument;