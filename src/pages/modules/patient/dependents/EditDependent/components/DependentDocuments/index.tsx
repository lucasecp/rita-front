import React, { useEffect, useState } from 'react'

import { Container } from './styles'
import { Select } from '@/components/Form/Select'
import { SendedFile } from './SendedFile'
import { SeeDocumentFile } from './SeeDocumentFile'
import apiPatient from '@/services/apiPatient'
import { AxiosResponse } from 'axios'
import { useLoading } from '@/hooks/useLoading'

interface DependentDocumentsProps {
  incomeValue: string
  pacientCpf: string
  pacientId: number
  messageToUpdateDocuments: number
}

export const DependentDocuments: React.FC<DependentDocumentsProps> = ({
  incomeValue,
  pacientCpf,
  pacientId,
  messageToUpdateDocuments,
}) => {
  const { Loading } = useLoading()

  const [documentIncome, setDocumentIncome] = useState<any>('')

  useEffect(() => {
    const loadDocuments = async () => {
      try {
        Loading.turnOn()

        const response = await apiPatient.get(
          `/paciente/${pacientId}/documento?tipoDocumento=Renda`,
          { responseType: 'arraybuffer' },
        )

        setDocumentIncome(response)
      } catch ({ response }) {
      } finally {
        Loading.turnOff()
      }
    }

    loadDocuments()
  }, [])

  useEffect(() => {
    const updateFiles = async () => {
      const formFile1 = new FormData()
      formFile1.append('file', documentIncome)

      try {
        await apiPatient.post(
          `/paciente/documento?cpf=${pacientCpf}&tipoDocumento=Renda`,
          formFile1,
        )

        await apiPatient.patch(
          `/paciente/dependente/documento/confirmar`,
          null,
          {
            params: { cpf: pacientCpf },
          },
        )
      } catch (error) {
        console.log(error)
      }
    }

    updateFiles()
  }, [messageToUpdateDocuments])

  return (
    <Container>
      <h1>Documentos Cadastrados</h1>
      <SeeDocumentFile
        title="Foto segurando o documento de identificação"
        document={null}
      />
      <SeeDocumentFile
        title="Foto do documento de identificação frente"
        document={null}
      />
      <SeeDocumentFile
        title="Foto do documento de identificação verso"
        document={null}
      />
      <SeeDocumentFile title="Comprovante de endereço" document={null} />
      <section>
        <Select
          label="Renda:"
          labelDefaultOption={incomeValue}
          value={''}
          disabled
        />
        <SendedFile
          title="Comprovante de Renda"
          file={null}
          onGetFile={setDocumentIncome}
        />
      </section>
    </Container>
  )
}
