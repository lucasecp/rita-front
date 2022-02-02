import React from 'react'
import { useHistory } from 'react-router-dom'

import ButtonOutline from '@/components/Button/Outline'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { DIRECTOR_IMPORT } from '@/routes/constants/namedRoutes/routes'

import { Error as AccordionError } from './accordions/Error'
import { Success as AccordionSuccess } from './accordions/Success'

import { Container, BtnGroup } from './styles'

export const Report: React.FC = () => {
  const history = useHistory()

  const onBack = () => {
    history.push(DIRECTOR_IMPORT)
  }

  return (
    <DefaultLayout title="Importação">
      <Container>
        <h1>Importação realizada - 27/01/2022 - 16:39 - Empresa XPTO</h1>

        <AccordionSuccess />
        <AccordionError />
      </Container>
      <BtnGroup>
        <ButtonOutline onClick={onBack}>Voltar</ButtonOutline>
      </BtnGroup>
    </DefaultLayout>
  )
}
