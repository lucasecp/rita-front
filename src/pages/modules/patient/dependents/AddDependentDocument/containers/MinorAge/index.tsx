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
import { useModal } from '@/hooks/useModal'
import { CancelAndExit } from './documents/messages/CancelAndExit'
import { AddADocument } from './documents/messages/AddADocument'
import { AddABirthCertificate } from './documents/messages/AddABirthCertificate'

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
  const { showMessage } = useModal()

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

  const backToList = () => {
    if (ownDocumentFile || birthdayCertificateFile)
      return showMessage(CancelAndExit)

    history.push(PATIENT_DEPENDENTS)
  }

  const VerifyFilesAndCallAPI = async () => {
    if (!ownDocumentFile || documentTypeSelected === 'identidade' || '')
      return showMessage(AddADocument)
    if (
      !birthdayCertificateFile ||
      documentTypeSelected === 'certidao_de_nascimento'
    )
      return showMessage(AddABirthCertificate)

    if (ownDocumentFile || birthdayCertificateFile)
      if (documentTypeSelected === 'identidade') {
        Loading.turnOn()

        const formFile1 = new FormData()
        formFile1.append('file', ownDocumentFile)

        const formFile2 = new FormData()
        formFile2.append('file', ownBackDocumentFile)

        try {
          console.log('passou')
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
          console.log('passou denovo')

          await apiPatient.patch(
            `/paciente/dependente/documento/confirmar`,
            null,
            {
              params: { cpf: dependent.cpf },
            },
          )
        } catch ({ response }) {
          toast.error('Erro ao enviar os documentos!')
        } finally {
          toast.success('Cadastro realizado com sucesso')

          backToList()
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
      } catch (error) {
        toast.error('Erro ao enviar os documentos!')
      } finally {
        toast.success('Cadastro realizado com sucesso')

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
