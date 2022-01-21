import React from 'react'
import { AccordionDetails, AccordionSummary } from '@material-ui/core'
import { AccordionContainer } from '../styles'

import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down2.svg'

import InstructionsBirthCertificate from './Instructions'
import SendedFile from '../components/SendedFile'

const BirthCertificate = ({ BirthdayCertificateFile, onGetFile, error }) => {
  return (
    <>
      <AccordionContainer square={true} defaultExpanded={true} expanded={true}>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          // expandIcon={!BirthdayCertificateFile && <ArrowDownIcon />}
          // disabled={!!BirthdayCertificateFile}
        >
          <h2>
            Foto da Certidão de Nascimento <span>*</span>
          </h2>
        </AccordionSummary>
        <AccordionDetails>
          {BirthdayCertificateFile && (
            <SendedFile file={BirthdayCertificateFile} onGetFile={onGetFile} />
          )}
          {!BirthdayCertificateFile && (
            <InstructionsBirthCertificate
              onGetFile={onGetFile}
              error={error}
            />
          )}
        </AccordionDetails>
      </AccordionContainer>
    </>
  )
}

export default BirthCertificate
