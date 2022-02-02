import React from 'react'

import { ReactComponent as ErrorImportIcon } from '@/assets/icons/import-error.svg'
import { ReactComponent as OpenCloseAccordionIcon } from '@/assets/icons/open-close-accordion.svg'

import { Table } from './Table'

import { AccordionDetails, AccordionSummary } from '@material-ui/core'
import { AccordionContainer } from './styles'

export const Error: React.FC = () => {
  return (
    <AccordionContainer square={true} defaultExpanded={false}>
      <AccordionSummary
        aria-controls="success-content"
        id="success-header"
        expandIcon={<OpenCloseAccordionIcon />}
      >
        <ErrorImportIcon />
        <h2>214 registros com erros na importação</h2>
      </AccordionSummary>
      <AccordionDetails>
        <Table />
      </AccordionDetails>
    </AccordionContainer>
  )
}
