import React from 'react'

import { ReactComponent as ErrorImportIcon } from '@/assets/icons/import-error.svg'
import { ReactComponent as OpenCloseAccordionIcon } from '@/assets/icons/open-close-accordion.svg'

import { FromApiResponse } from '@/pages/modules/Director/Imports/adapters/fromApiImport'

import { Table } from './Table'

import { AccordionDetails, AccordionSummary } from '@material-ui/core'
import { AccordionContainer } from './styles'

type ErrorProps = Omit<
  FromApiResponse,
  'countSucessRegisters' | 'listSucessRegister'
>

export const Error: React.FC<ErrorProps> = ({
  countErrorsRegister,
  listErrorsRegister,
}) => {
  return (
    <AccordionContainer square={true} defaultExpanded={false}>
      <AccordionSummary
        aria-controls="success-content"
        id="success-header"
        expandIcon={<OpenCloseAccordionIcon />}
      >
        <ErrorImportIcon />
        <h2>{countErrorsRegister} registros com erros na importação</h2>
      </AccordionSummary>
      <AccordionDetails>
        <Table listErrorsRegister={listErrorsRegister} />
      </AccordionDetails>
    </AccordionContainer>
  )
}
