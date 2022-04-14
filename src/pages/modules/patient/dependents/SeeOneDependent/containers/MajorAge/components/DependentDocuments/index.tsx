import React, { useEffect, useState } from 'react'

import { Container } from './styles'
import { SeeDocumentFile } from './SeeDocumentFile'
import { DocumentFile } from './DocumentFile'
import { useLoading } from '@/hooks/useLoading'

import { AxiosResponse } from 'axios'
import apiPatient from '@/services/apiPatient'
import { Select } from '@/components/Form/Select'

interface DependentDocumentsProps {
  incomeValue: string
  dependentId: number
}

export const DependentDocuments: React.FC<DependentDocumentsProps> = ({
  incomeValue,
  dependentId,
}) => {
  const { Loading } = useLoading()

  const [holdingDocument, setHoldingDocument] = useState<AxiosResponse>()
  const [frontDocument, setFrontDocument] = useState<AxiosResponse>()
  const [backDocument, setBackDocument] = useState<AxiosResponse>()
  const [incomeDocument, setIncomeDocument] = useState<AxiosResponse>()
  const [addressDocument, setAddressDocument] = useState<AxiosResponse>()

  useEffect(() => {
    const loadDocuments = async () => {
      try {
        Loading.turnOn()

        const response = await apiPatient.get(
          `/paciente/${dependentId}/documento?tipoDocumento=FotoSegurandoDoc`,
          { responseType: 'arraybuffer' },
        )

        setHoldingDocument(response)
      } catch ({ response }) {
      } finally {
        Loading.turnOff()
      }

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

      try {
        Loading.turnOn()

        const response = await apiPatient.get(
          `/paciente/${dependentId}/documento?tipoDocumento=Renda`,
          { responseType: 'arraybuffer' },
        )

        setIncomeDocument(response)
      } catch ({ response }) {
      } finally {
        Loading.turnOff()
      }

      try {
        Loading.turnOn()

        const response = await apiPatient.get(
          `/paciente/${dependentId}/documento?tipoDocumento=ComprovanteResi`,
          { responseType: 'arraybuffer' },
        )

        setAddressDocument(response)
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
      <DocumentFile
        title="Foto segurando o documento de identificação"
        document={holdingDocument}
      />
      <DocumentFile
        title="Foto do documento de identificação frente"
        document={frontDocument}
      />
      <DocumentFile
        title="Foto do documento de identificação verso"
        document={backDocument}
      />
      <SeeDocumentFile
        title="Comprovante de endereço"
        document={addressDocument}
      />
      <section>
        <Select
          label="Renda:"
          labelDefaultOption={incomeValue}
          value={''}
          disabled
        />
        <SeeDocumentFile
          title={'Comprovante de Renda'}
          document={incomeDocument}
        />
      </section>
    </Container>
  )
}
