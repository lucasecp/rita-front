import React, { useEffect, useState } from 'react';
import { Container, Content, ContentFile } from '../style';
import AccordionComponent from '@/components/Accordion';
import { AccordionDetails, AccordionSummary } from '@material-ui/core';
import InputFile from '@/components/Form/InputFile/InputFile';
import OutlineButton from '@/components/Button/Outline';
import {documentTip} from '../tips'
import income from '@/assets/img/income.png'
import trash from '@/assets/img/trash.png'
import BigSize from '../../messages/BigSize'
import InvalidFormat from '../../messages/InvalidFormat'
import Modal from '@/components/Modal';

const ProofOfIncome = ({value,setValue}) => {
  const [showModal, setShowModal] = useState(false)
  const [messages, setMessages] = useState(null)
  const setModalMessages = (Message) => {
    setShowModal(true)
    setMessages(<Message onShowModal={setShowModal} />)
  }
  useEffect(() => {
    if (!value) return
    const fileType = value.type.split('/')[1]
    const fileSize = value.size / (1024 * 1024).toFixed(2)
    if (
      fileType !== 'jpg' &&
      fileType !== 'jpeg' &&
      fileType !== 'png' &&
      fileType !== 'pdf'
    ) {
      setModalMessages(InvalidFormat)
      return setValue('')
    }
    if (fileSize > 10) {
      setModalMessages(BigSize)
      return setValue('')
    }
  }, [value])

  return (
    <Container>
    <AccordionComponent expanded={!value}>
    <AccordionSummary>
       <h2>Foto do comprovante de renda</h2>
       {value && value.name && (
            <ContentFile>
              <span>{value.name}</span>
              <button onClick={() => setValue('')}>
                <img src={trash} />
                Remover o arquivo
              </button>
            </ContentFile>
          )}
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
          <InputFile setValue={setValue}>
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


export default ProofOfIncome;