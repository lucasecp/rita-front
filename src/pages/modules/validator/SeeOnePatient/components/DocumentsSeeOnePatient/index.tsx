import React, { useEffect, useState } from 'react'
import { Select } from '@/components/Form/Select'
// import { incomeOptions } from '../../constants/income'
import { SeeDocumentFile } from './SeeDocumentFile'

import { Container } from './styles'
import apiPatient from '@/services/apiPatient'
import { useLoading } from '@/hooks/useLoading'

import { AxiosResponse } from 'axios'

interface DocumentsSeeOnePatientProps {
  incomeType: string
  cpf: string
  hasDependentUnderAge: boolean
}

export const DocumentsSeeOnePatient: React.FC<DocumentsSeeOnePatientProps> = ({
  incomeType,
  cpf,
  hasDependentUnderAge,
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
          `/paciente/documento?cpf=${cpf}&tipoDocumento=FotoSegurandoDoc`,
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
          `/paciente/documento?cpf=${cpf}&tipoDocumento=Cpf`,
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
          `/paciente/documento?cpf=${cpf}&tipoDocumento=DocVerso`,
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
          `/paciente/documento?cpf=${cpf}&tipoDocumento=Renda`,
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
          `/paciente/documento?cpf=${cpf}&tipoDocumento=ComprovanteResi`,
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
      <h2>Documentos</h2>
      {!hasDependentUnderAge && (
        <SeeDocumentFile
          title="Foto segurando o documento de identificação"
          document={holdingDocument}
          disabled={!holdingDocument}
        />
      )}
      <SeeDocumentFile
        title="Foto do documento de identificação frente"
        document={frontDocument}
        disabled={!frontDocument}
      />
      <SeeDocumentFile
        title="Foto do documento de identificação verso"
        document={backDocument}
        disabled={!backDocument}
      />
      {!hasDependentUnderAge && (
        <SeeDocumentFile
          title="Comprovante de endereço"
          document={addressDocument}
          disabled={!addressDocument}
        />
      )}
      {!hasDependentUnderAge && (
        <section>
          <Select
            label="Renda:"
            labelDefaultOption={incomeType}
            value={''}
            disabled
          />
          <aside>
            <SeeDocumentFile
              title="Comprovante de renda"
              document={incomeDocument}
              disabled={!incomeDocument}
            />
          </aside>
        </section>
      )}
    </Container>
  )
}
