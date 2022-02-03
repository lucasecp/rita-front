import React from 'react'

import { ReactComponent as SuccessImportIcon } from '@/assets/icons/import-success.svg'
import { ReactComponent as OpenCloseAccordionIcon } from '@/assets/icons/open-close-accordion.svg'

import { Table } from './Table'

import { AccordionDetails, AccordionSummary } from '@material-ui/core'
import { AccordionContainer } from './styles'

export const Success: React.FC = () => {
  return (
    <AccordionContainer square={true} defaultExpanded={false}>
      <AccordionSummary
        aria-controls="success-content"
        id="success-header"
        expandIcon={<OpenCloseAccordionIcon />}
      >
        <SuccessImportIcon />
        <h2>1944 registros importados com sucesso</h2>
      </AccordionSummary>
      <AccordionDetails>
        <Table />
      </AccordionDetails>
    </AccordionContainer>
  )
}
