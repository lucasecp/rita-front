import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import ButtonOutline from '@/components/Button/Outline'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { DIRECTOR_IMPORT } from '@/routes/constants/namedRoutes/routes'
import { AutocompleteOptions } from '@/components/Form/Autocomplete'

import { FromApiResponse } from '@/pages/modules/Director/Imports/adapters/fromApiImport'

import { Error as AccordionError } from './accordions/Error'
import { Success as AccordionSuccess } from './accordions/Success'

import { Container, BtnGroup } from './styles'

interface useLocationState {
  reportDetails: {
    data: string
    hour: string
    company: AutocompleteOptions
  }
  importedDataMapped: FromApiResponse
}

export const Report: React.FC = () => {
  const history = useHistory()
  const { reportDetails, importedDataMapped } =
    useLocation<useLocationState>().state

  const onBack = () => {
    history.push(DIRECTOR_IMPORT)
  }

  return (
    <DefaultLayout title="Importação - Relatório">
      <Container>
        <h1>
          Importação realizada - {reportDetails.data} - {reportDetails.hour} -
          Empresa {reportDetails.company.label}
        </h1>
        <AccordionSuccess
          listSucessRegister={importedDataMapped.listSucessRegister}
          countSucessRegisters={importedDataMapped.countSucessRegisters}
        />
        <AccordionError
          listErrorsRegister={importedDataMapped.listErrorsRegister}
          countErrorsRegister={importedDataMapped.countErrorsRegister}
        />
      </Container>
      <BtnGroup>
        <ButtonOutline onClick={onBack}>Voltar</ButtonOutline>
      </BtnGroup>
    </DefaultLayout>
  )
}
