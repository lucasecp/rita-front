import { useEffect, useState } from 'react'
import { AxiosResponse } from 'axios'

import apiPatient from '@/services/apiPatient'
import { useLoading } from '@/hooks/useLoading'
import { Select } from '@/components/Form/Select'
import { SeeDocumentFile } from './SeeDocumentFile'

import { Container } from './styles'
import formatIncome from '../../helpers/formatIncome'

interface DocumentsSeeOnePatientProps {
  incomeDocumentType: string
  cpf: string
  isDependentMinorAge: boolean
}

const DocumentsSeeOnePatient: React.FC<DocumentsSeeOnePatientProps> = ({
  incomeDocumentType,
  cpf,
  isDependentMinorAge,
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

  const showBackDocument = (isDependentMinorAge: boolean, document: any) => {
    if (!isDependentMinorAge || (isDependentMinorAge && document)) {
      return true
    }

    return false
  }

  return (
    <Container>
      <h2>Documentos</h2>
      {!isDependentMinorAge && (
        <SeeDocumentFile
          title="Foto segurando o documento de identificação"
          document={holdingDocument}
        />
      )}
      <SeeDocumentFile
        title="Foto do documento de identificação frente"
        document={frontDocument}
      />
      {showBackDocument(isDependentMinorAge, backDocument) && (
        <SeeDocumentFile
          title="Foto do documento de identificação verso"
          document={backDocument}
        />
      )}
      {!isDependentMinorAge && (
        <>
          <SeeDocumentFile
            title="Comprovante de endereço"
            document={addressDocument}
          />
          <section>
            <Select
              label="Renda:"
              labelDefaultOption={formatIncome(incomeDocumentType)}
              value={''}
              disabled
            />
            <aside>
              <SeeDocumentFile
                title="Comprovante de renda"
                document={incomeDocument}
              />
            </aside>
          </section>
        </>
      )}
    </Container>
  )
}

export default DocumentsSeeOnePatient
