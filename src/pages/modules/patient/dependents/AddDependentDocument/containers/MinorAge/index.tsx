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
import axios from 'axios'
import { toast } from '@/styles/components/toastify'
import { PATIENT_DEPENDENTS } from '@/routes/constants/namedRoutes/routes'
import { useHistory } from 'react-router'

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

  const history = useHistory()

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

        setBirthdayCertificateFile(response)
      } catch (error) {
        console.log(error)
      } finally {
        Loading.turnOff()
      }
    }

    loadDocuments()
  }, [])

  const backToList = () => history.push(PATIENT_DEPENDENTS)

  const VerifyFilesAndCallAPI = async () => {
    if (!ownDocumentFile || !birthdayCertificateFile) {
      return
    }

    if (documentTypeSelected === 'identidade') {
      Loading.turnOn()

      const formFile1 = new FormData()
      formFile1.append('file', ownDocumentFile)

      const formFile2 = new FormData()
      formFile1.append('file', ownBackDocumentFile)

      try {
        await axios.all([
          apiPatient.post(
            `/paciente/documento?cpf=${dependent.cpf}&tipoDocumento=FotoSegurandoDoc`,
            formFile1,
          ),
          !ownBackDocumentFile
            ? new Promise(() => null)
            : apiPatient.post(
                `/paciente/documento?cpf=${dependent.cpf}&tipoDocumento=FotoSegurandoDoc`,
                formFile2,
              ),
        ])

        const response = await apiPatient.patch(
          `/paciente/dependente/documento/confirmar`,
          formFile1,
          {
            params: { cpf: dependent.cpf },
          },
        )
      } catch ({ response }) {
        toast.error('Erro ao enviar os documentos!')
      } finally {
        toast.error('Cadastro realizado com sucesso')

        // REDIRECIONAMENTO

        backToList()
        Loading.turnOff()
      }
    }

    if (documentTypeSelected === 'certidao_de_nascimento') {
      Loading.turnOn()

      try {
        const formFile1 = new FormData()
        formFile1.append('file', birthdayCertificateFile)

        apiPatient.post(
          `/paciente/documento?cpf=${dependent.cpf}&tipoDocumento=FotoSegurandoDoc`,
          formFile1,
        )
      } catch (error) {
        toast.error('Erro ao enviar os documentos!')
      } finally {
        toast.error('Cadastro realizado com sucesso')

        // REDIRECIONAMENTO

        backToList()
        Loading.turnOff()
      }
      Loading.turnOff()
    }
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
        <OutilineButton onClick={backToList}>Cancelar</OutilineButton>
        <CustomBtn onClick={VerifyFilesAndCallAPI}>Salvar</CustomBtn>
      </Footer>
    </>
  )
}
