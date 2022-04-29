import React from 'react'

import { ReactComponent as ErrorImportIcon } from '@/assets/icons/import-error.svg'
import { ReactComponent as OpenCloseAccordionIcon } from '@/assets/icons/open-close-accordion.svg'

import { StatusDataFromImport } from '@/pages/modules/Director/Imports/adapters/fromApiImport'

import { Table } from './Table'

import { AccordionDetails, AccordionSummary } from '@material-ui/core'
import { AccordionContainer } from './styles'

type ErrorProps = Omit<StatusDataFromImport, 'success' | 'inactivate'>

export const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <AccordionContainer square={true} defaultExpanded={false}>
      <AccordionSummary
        aria-controls="error-content"
        id="error-header"
        expandIcon={<OpenCloseAccordionIcon />}
      >
        <ErrorImportIcon />
        <h2>{error.countErrorsRegisters} registros com erros na importação</h2>
      </AccordionSummary>
      <AccordionDetails>
        <Table listErrorsRegister={error.listErrorsRegister} />
      </AccordionDetails>
    </AccordionContainer>
  )
}
