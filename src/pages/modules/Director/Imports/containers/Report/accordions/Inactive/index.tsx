import React from 'react'

import { ReactComponent as ErrorImportIcon } from '@/assets/icons/import-error.svg'
import { ReactComponent as OpenCloseAccordionIcon } from '@/assets/icons/open-close-accordion.svg'

import { FromApiResponse } from '@/pages/modules/Director/Imports/adapters/fromApiImport'

import { Table } from './Table'

import { AccordionDetails, AccordionSummary } from '@material-ui/core'
import { AccordionContainer } from './styles'

type InactiveProps = Omit<FromApiResponse, 'success' | 'error'>

export const Inactive: React.FC<InactiveProps> = ({ inactivate }) => {
  return (
    <AccordionContainer square={true} defaultExpanded={false}>
      <AccordionSummary
        aria-controls="inactive-content"
        id="inactive-header"
        expandIcon={<OpenCloseAccordionIcon />}
      >
        <ErrorImportIcon />
        <h2>
          {inactivate.countInactivatesRegisters} funcionários desvinculados do
          benefício
        </h2>
      </AccordionSummary>
      <AccordionDetails>
        <Table listInactivateRegister={inactivate.listInactivatesRegister} />
      </AccordionDetails>
    </AccordionContainer>
  )
}
