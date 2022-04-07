import React, { useEffect, useState } from 'react'

import { Container } from './styles'
import { SeeDocumentFile } from './SeeDocumentFile'
import { useLoading } from '@/hooks/useLoading'

import { AxiosResponse } from 'axios'
import apiPatient from '@/services/apiPatient'

interface DependentDocumentsProps {
  dependentId: number
}

export const DependentDocuments: React.FC<DependentDocumentsProps> = ({
  dependentId,
}) => {
  const { Loading } = useLoading()

  const [frontDocument, setFrontDocument] = useState<AxiosResponse>()
  const [backDocument, setBackDocument] = useState<AxiosResponse>()

  useEffect(() => {
    const loadDocuments = async () => {
      try {
        Loading.turnOn()

        const response = await apiPatient.get(
          `/paciente/${dependentId}/documento?tipoDocumento=Cpf`,
          { responseType: 'arraybuffer' },
        )

        setFrontDocument(response)
      } catch ({ response }) {
      } finally {
        Loading.turnOff()
      }

      try {
        Loading.turnOn()

        const response = await apiPatient.get(
          `/paciente/${dependentId}/documento?tipoDocumento=DocVerso`,
          { responseType: 'arraybuffer' },
        )

        setBackDocument(response)
      } catch ({ response }) {
      } finally {
        Loading.turnOff()
      }
    }

    loadDocuments()
  }, [])

  return (
    <Container>
      <h1>Documentos Cadastrados</h1>
      <SeeDocumentFile
        title="Foto do documento de identificação frente"
        document={frontDocument}
      />
      <SeeDocumentFile
        title="Foto do documento de identificação verso"
        document={backDocument}
      />
    </Container>
  )
}
