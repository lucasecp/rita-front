import React, { useState } from 'react'
import OutilineButton from '@/components/Button/Outline'
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
import { useModal } from '@/hooks/useModal'
import { CancelAndExit } from './documents/messages/CancelAndExit'
import { DocumentsNotSended } from './messages/DocumentsNotSended'

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

  const [error, setError] = useState({
    select: '',
    birthdayCertificate: '',
    document: '',
  })

  // useEffect(() => {
  //   if (error.select && documentTypeSelected) {
  //     setError({
  //       select: '',
  //       birthdayCertificate: '',
  //       document: '',
  //     })
  //   }
  // }, [documentTypeSelected])

  const { Loading } = useLoading()
  const { showMessage, closeModal } = useModal()

  // useEffect(() => {
  //   const loadDocuments = async () => {
  //     try {
  //       Loading.turnOn()

  //       const response: any = await apiPatient.get(
  //         `/paciente/documento?cpf=${dependent.cpf}&tipoDocumento=FotoSegurandoDoc`,
  //         { responseType: 'arraybuffer' },
  //       )

  //       setOwnDocumentFile(response)
  //     } catch (error) {
  //       console.error(error)
  //     } finally {
  //       Loading.turnOff()
  //     }

  //     try {
  //       Loading.turnOn()

  //       const response: any = await apiPatient.get(
  //         `/paciente/documento?cpf=${dependent.cpf}&tipoDocumento=Cpf`,
  //         { responseType: 'arraybuffer' },
  //       )

  //       setOwnBackDocumentFile(response)
  //     } catch (error) {
  //       console.log(error)
  //     } finally {
  //       Loading.turnOff()
  //     }

  //     try {
  //       Loading.turnOn()

  //       const response: any = await apiPatient.get(
  //         `/paciente/documento?cpf=${dependent.cpf}&tipoDocumento=DocVerso`,
  //         { responseType: 'arraybuffer' },
  //       )

  //       setBirthdayCertificateFile(response)
  //     } catch (error) {
  //       console.log(error)
  //     } finally {
  //       Loading.turnOff()
  //     }
  //   }

  //   loadDocuments()
  // }, [])

  const cancel = () => {
    if (ownDocumentFile || birthdayCertificateFile)
      return showMessage(CancelAndExit)

    history.push(PATIENT_DEPENDENTS)
  }

  const onSaveDocumentDependent = async () => {
    if (
      (!ownDocumentFile || !ownBackDocumentFile) &&
      documentTypeSelected === 'identidade'
    )
      return setError({
        select: '',
        birthdayCertificate: '',
        document: 'O envio da foto do documento é obrigatório.',
      })

    if (
      !birthdayCertificateFile &&
      documentTypeSelected === 'certidao_de_nascimento'
    )
      return setError({
        select: '',
        birthdayCertificate: 'O envio da foto do documento é obrigatório.',
        document: '',
      })

    if (documentTypeSelected === '')
      return setError({
        select: 'Necessário escolher uma opção',
        birthdayCertificate: '',
        document: '',
      })

    if (documentTypeSelected === 'identidade') {
      const formFile1 = new FormData()
      formFile1.append('file', ownDocumentFile)

      const formFile2 = new FormData()
      formFile2.append('file', ownBackDocumentFile)

      try {
        Loading.turnOn()

        await axios.all([
          apiPatient.post(
            `/paciente/documento?cpf=${dependent.cpf}&tipoDocumento=Cpf`,
            formFile1,
          ),
          !ownBackDocumentFile
            ? new Promise((resolve) => {
                resolve('')
              })
            : apiPatient.post(
                `/paciente/documento?cpf=${dependent.cpf}&tipoDocumento=DocVerso`,
                formFile2,
              ),
        ])

        await apiPatient.patch(
          `/paciente/dependente/documento/confirmar`,
          null,
          {
            params: { cpf: dependent.cpf },
          },
        )

        closeModal()
        history.push(PATIENT_DEPENDENTS)
      } catch {
        return showMessage(DocumentsNotSended, {
          onSaveDocumentDependent,
        })
      } finally {
        Loading.turnOff()
      }
    }

    if (documentTypeSelected === 'certidao_de_nascimento') {
      Loading.turnOn()

      try {
        const formFile1 = new FormData()
        formFile1.append('file', birthdayCertificateFile)

        await apiPatient.post(
          `/paciente/documento?cpf=${dependent.cpf}&tipoDocumento=Cpf`,
          formFile1,
        )
        await apiPatient.patch(
          `/paciente/dependente/documento/confirmar`,
          null,
          {
            params: { cpf: dependent.cpf },
          },
        )

        closeModal()
        history.push(PATIENT_DEPENDENTS)
      } catch {
        return showMessage(DocumentsNotSended, {
          onSaveDocumentDependent,
        })
      } finally {
        Loading.turnOff()
      }
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
            msgError={error.select}
            onClick={() =>
              setError({
                select: '',
                birthdayCertificate: '',
                document: '',
              })
            }
          />
        </div>
        {documentTypeSelected === 'identidade' && (
          <>
            <OwnDocument
              ownDocumentFile={ownDocumentFile}
              onGetFile={setOwnDocumentFile}
              error={error.document}
            />
            <OwnBackDocument
              ownBackDocumentFile={ownBackDocumentFile}
              onGetFile={setOwnBackDocumentFile}
              hasPreviousDocument={!!ownDocumentFile}
              error={error.document}
            />
          </>
        )}
        {documentTypeSelected === 'certidao_de_nascimento' && (
          <BirthCertificate
            BirthdayCertificateFile={birthdayCertificateFile}
            onGetFile={setBirthdayCertificateFile}
            error={error.birthdayCertificate}
          />
        )}
      </Container>
      <Footer>
        <OutilineButton onClick={cancel}>Cancelar</OutilineButton>
        <CustomBtn onClick={onSaveDocumentDependent}>Salvar</CustomBtn>
      </Footer>
    </>
  )
}
