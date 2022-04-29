import React from 'react'

import { ReactComponent as SuccessImportIcon } from '@/assets/icons/import-success.svg'
import { ReactComponent as OpenCloseAccordionIcon } from '@/assets/icons/open-close-accordion.svg'

import { StatusDataFromImport } from '@/pages/modules/Director/Imports/adapters/fromApiImport'

import { Table } from './Table'

import { AccordionDetails, AccordionSummary } from '@material-ui/core'
import { AccordionContainer } from './styles'

type SuccessProps = Omit<StatusDataFromImport, 'error' | 'inactivate'>

export const Success: React.FC<SuccessProps> = ({ success }) => {
  return (
    <AccordionContainer square={true} defaultExpanded={false}>
      <AccordionSummary
        aria-controls="success-content"
        id="success-header"
        expandIcon={<OpenCloseAccordionIcon />}
      >
        <SuccessImportIcon />
        <h2>{success.countSucessRegisters} registros importados com sucesso</h2>
      </AccordionSummary>
      <AccordionDetails>
        <Table listSucessRegister={success.listSucessRegister} />
      </AccordionDetails>
    </AccordionContainer>
  )
}
