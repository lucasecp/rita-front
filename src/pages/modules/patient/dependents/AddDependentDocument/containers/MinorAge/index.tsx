import React, { useState, useEffect } from 'react'
import OutilineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { Container, Footer, CustomBtn } from './styles'
import { Select } from '@/components/Form/Select'
import OwnDocument from './documents/OwnDocument'
import OwnBackDocument from './documents/OwnBackDocument'
import BirthCertificate from './documents/BirthCertificate'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'

interface MinorAgeProps {
  dependent: {
    id: number
    cpf: string
  }
}

export const MinorAge: React.FC<MinorAgeProps> = ({ dependent }) => {
  const [documentTypeSelected, setDocumentTypeSelected] = useState('')
  const [ownDocumentFile, setOwnDocumentFile] = useState('')
  const [ownBackDocumentFile, setOwnBackDocumentFile] = useState('')
  const [birthdayCertificateFile, setBirthdayCertificateFile] = useState('')

  console.log(dependent.cpf)

  const [errors, setErrors] = useState({
    birthdayCertificate: '',
    ownDocument: '',
    ownBackDocument: '',
  })

  const { Loading } = useLoading()

  useEffect(() => {
    const loadDocuments = async () => {
      try {
        Loading.turnOn()

        const response: any = await apiPatient.get(
          `/paciente/documento?cpf=${dependent.cpf}&tipoDocumento=FotoSegurandoDoc`,
          { responseType: 'arraybuffer' },
        )

        console.log('1:', response)

        setOwnDocumentFile(response)
      } catch (error) {
        console.error(error)
      } finally {
        Loading.turnOff()
      }

      try {
        Loading.turnOn()

        const response: any = await apiPatient.get(
          `/paciente/documento?cpf=${dependent.cpf}&tipoDocumento=Cpf`,
          { responseType: 'arraybuffer' },
        )

        console.log('2:', response)

        setOwnBackDocumentFile(response)
      } catch (error) {
        console.log(error)
      } finally {
        Loading.turnOff()
      }

      try {
        Loading.turnOn()

        const response: any = await apiPatient.get(
          `/paciente/documento?cpf=${dependent.cpf}&tipoDocumento=DocVerso`,
          { responseType: 'arraybuffer' },
        )

        console.log('3:', response)

        setBirthdayCertificateFile(response)
      } catch (error) {
        console.log(error)
      } finally {
        Loading.turnOff()
      }
    }

    loadDocuments()
  }, [])

  const VerifyFilesAndCallAPI = () => {
    if (!ownDocumentFile || !birthdayCertificateFile) Loading.turnOn()

    if (documentTypeSelected === 'identidade') {
      return
    }

    if (documentTypeSelected === 'certidao_de_nascimento') {
    }

    Loading.turnOff()
  }

  return (
    <>
      <Container>
        <div>
          <h1>Atualização de Dependentes</h1>
          <Select
            label="Escolha uma opção:"
            labelDefaultOption="Selecione"
            options={[
              {
                label: 'Certidão de Nascimento',
                value: 'certidao_de_nascimento',
              },
              {
                label: 'Identidade',
                value: 'identidade',
              },
            ]}
            name="regional"
            setValue={setDocumentTypeSelected}
            value={documentTypeSelected}
          />
        </div>
        {documentTypeSelected === 'identidade' && (
          <>
            <OwnDocument
              ownDocumentFile={ownDocumentFile}
              onGetFile={setOwnDocumentFile}
              errors={errors.ownDocument}
            />
            <OwnBackDocument
              ownBackDocumentFile={ownBackDocumentFile}
              onGetFile={setOwnBackDocumentFile}
              hasPreviousDocument={!!ownDocumentFile}
              errors={errors.ownBackDocument}
            />
          </>
        )}
        {documentTypeSelected === 'certidao_de_nascimento' && (
          <BirthCertificate
            BirthdayCertificateFile={birthdayCertificateFile}
            onGetFile={setBirthdayCertificateFile}
            errors={errors.birthdayCertificate}
          />
        )}
      </Container>
      <Footer>
        <OutilineButton>Cancelar</OutilineButton>
        <CustomBtn onClick={VerifyFilesAndCallAPI}>Salvar</CustomBtn>
      </Footer>
    </>
  )
}
