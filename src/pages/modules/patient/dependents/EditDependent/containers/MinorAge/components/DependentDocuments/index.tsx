import React, { useEffect, useState } from 'react'

import { Container } from './styles'
import { SeeDocumentFile } from './SeeDocumentFile'
import apiPatient from '@/services/apiPatient'
import { useLoading } from '@/hooks/useLoading'

interface DependentDocumentsProps {
  pacientId: number
}

export const DependentDocuments: React.FC<DependentDocumentsProps> = ({
  pacientId,
}) => {
  const { Loading } = useLoading()

  const [frontDocument, setFrontDocument] = useState<any>('')
  const [backDocument, setBackDocument] = useState<any>('')

  useEffect(() => {
    const loadDocuments = async () => {
      try {
        Loading.turnOn()

        const response = await apiPatient.get(
          `/paciente/${pacientId}/documento?tipoDocumento=Cpf`,
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
          `/paciente/${pacientId}/documento?tipoDocumento=DocVerso`,
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
      {backDocument && (
        <SeeDocumentFile
          title="Foto do documento de identificação verso"
          document={backDocument}
        />
      )}
    </Container>
  )
}
