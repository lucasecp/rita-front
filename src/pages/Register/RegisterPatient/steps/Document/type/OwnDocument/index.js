import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core'
import { AccordionContainer, Content, ContentFile } from '../style'
import AccordionComponent from '@/components/Accordion'
import InputFile from '@/components/Form/InputFile/InputFile'
import OutlineButton from '@/components/Button/Outline'
import { documentTip } from '../tips'
import document from '@/assets/img/document.png'
import trash from '@/assets/img/trash.png'
import BigSize from '../../messages/BigSize'
import InvalidFormat from '../../messages/InvalidFormat'
import Modal from '@/components/Modal'
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons'

const OwnDocument = ({ value, setValue }) => {
  const [showModal, setShowModal] = useState(false)
  const [messages, setMessages] = useState(null)

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

  const setModalMessages = (Message) => {
    setShowModal(true)
    setMessages(<Message onShowModal={setShowModal} />)
  }

  return (
    <>
      <AccordionContainer>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <h2>Foto do documento de identificação</h2>
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
          <h3>
            Faça agora o upload da foto do seu documento de identificação que
            contenha o seu CPF
          </h3>
          <Content>
            <div>
              <img src={document} />
            </div>
            <div>
              <h4>Como tirar a foto:</h4>
              <ul>
                {documentTip.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
              <InputFile setValue={setValue}>
                <OutlineButton>Selecionar Arquivo</OutlineButton>
              </InputFile>
              <span>
                Tamanho máximo do arquivo: 10MB <br />
                Tipos de arquivos aceitos: jpg, jpeg, png ou pdf.
              </span>
            </div>
          </Content>
        </AccordionDetails>
      </AccordionContainer>
      <Modal show={showModal}>{messages}</Modal>
    </>
  )
}

export default OwnDocument
