import React from 'react'

import { Container } from './styles'
import { ReactComponent as Verified } from '@/assets/icons/import-success.svg'
import { ReactComponent as Error } from '@/assets/icons/import-error.svg'
import { AxiosResponse } from 'axios'

interface DocumentFileProps {
  title: string
  document: AxiosResponse | undefined
}

export const DocumentFile: React.FC<DocumentFileProps> = ({
  title,
  document,
}) => {
  return (
    <Container disabled={!document}>
      <h4>{title}</h4>
      {document ? <Verified /> : <Error />}
    </Container>
  )
}