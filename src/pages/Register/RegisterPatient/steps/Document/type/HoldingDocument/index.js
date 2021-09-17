import React, { useEffect, useState } from 'react'
import { AccordionDetails, AccordionSummary } from '@material-ui/core'
import { AccordionContainer, ContentFile } from '../style'
import trash from '@/assets/img/trash.png'
import Modal from '@/components/Modal'
import BigSize from '../../messages/BigSize'
import InvalidFormat from '../../messages/InvalidFormat'

import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons'
import InstructionsHoldingDocuments from './Instructions'
import SendedFile from '../../components/SendedFile'

const HoldingDocument = ({ setValue, value }) => {
  const [showModal, setShowModal] = useState(false)
  const [messages, setMessages] = useState(null)

  const [holdingDocumentFile, setHoldingDocumentFile] = useState('')

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

  console.log(holdingDocumentFile)

  return (
    <>
      <AccordionContainer square={true} defaultExpanded={true} expand={!value}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <div>
            <h2>Foto segurando o documento de identificação</h2>
            {value && value.name && (
              <ContentFile>
                <span>{value.name}</span>
                <button onClick={() => setValue('')}>
                  <img src={trash} />
                  Remover
                </button>
              </ContentFile>
            )}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {holdingDocumentFile ? (
            <SendedFile
              file={holdingDocumentFile}
              onGetFile={setHoldingDocumentFile}
            />
          ) : (
            <InstructionsHoldingDocuments onGetFile={setHoldingDocumentFile} />
          )}
        </AccordionDetails>
      </AccordionContainer>
      <Modal show={showModal}>{messages}</Modal>
    </>
  )
}

export default HoldingDocument
