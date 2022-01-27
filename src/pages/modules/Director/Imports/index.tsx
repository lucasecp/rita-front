import React, { useEffect } from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'

import { Container } from './styles'

export const Imports: React.FC = () => {
  useEffect(() => {
    document.title = 'Rita Saúde | Importações'
  }, [])

  return (
    <DefaultLayout title="Importações">
      <Container>
        <h1>Importações</h1>
      </Container>
    </DefaultLayout>
  )
}
