import { useEffect, useState } from 'react'

import apiPatient from '@/services/apiPatient'
import { useLoading } from '@/hooks/useLoading'
import { Select } from '@/components/Form/Select'
import { SeeDocumentFile } from './SeeDocumentFile'

// import { incomeOptions } from '../../constants/income'

import { Container } from './styles'
import formatIncome from '../../helpers/formatIncome'

function DocumentsSeeOnePatient({ incomeDocumentType, cpf }) {
  const { Loading } = useLoading()

  const [holdingDocument, setHoldingDocument] = useState()
  const [frontDocument, setFrontDocument] = useState()
  const [backDocument, setBackDocument] = useState()
  const [incomeDocument, setIncomeDocument] = useState()
  const [addressDocument, setAddressDocument] = useState()

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
      <SeeDocumentFile
        title="Foto segurando o documento de identificação"
        document={holdingDocument}
        disabled={!holdingDocument}
      />
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
      <SeeDocumentFile
        title="Comprovante de endereço"
        document={addressDocument}
        disabled={!addressDocument}
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
            disabled={!incomeDocument}
          />
        </aside>
      </section>
    </Container>
  )
}

export default DocumentsSeeOnePatient
