import HoldingDocument from '@/pages/Register/RegisterPatient/steps/Documents/types/HoldingDocument'
import OwnBackDocument from '@/pages/Register/RegisterPatient/steps/Documents/types/OwnBackDocument'
import OwnDocument from '@/pages/Register/RegisterPatient/steps/Documents/types/OwnDocument'
import ProofOfAddress from '@/pages/Register/RegisterPatient/steps/Documents/types/ProofOfAddress'
import ProofOfIncome from '@/pages/Register/RegisterPatient/steps/Documents/types/ProofOfIncome'
import React from 'react'

import { Container } from './styles'

interface DocumentFilesProps {}

export const DocumentFiles: React.FC<DocumentFilesProps> = ({}) => {
  // const { isPatientLinkedCompany, setDocumentsFile, previousStep, nextStep } =
  //   useRegisterPatient()

  // const [holdingDocumentFile, setHoldingDocumentFile] = useState('')
  // const [ownDocumentFile, setOwnDocumentFile] = useState('')
  // const [ownBackDocumentFile, setOwnBackDocumentFile] = useState('')
  // const [proofOfIncomeFile, setProofOfIncomeFile] = useState('')
  // const [proofOfAddressFile, setProofOfAddressFile] = useState('')
  // const [selectIncome, setSelectIncome] = useState('')

  // const [errors, setErrors] = useState({
  //   holdingDocument: '',
  //   ownDocument: '',
  //   ownBackDocument: '',
  //   selectIncome: '',
  // })

  // useEffect(() => {
  //   setDocumentsFile({
  //     holdingDocumentFile,
  //     ownDocumentFile,
  //     ownBackDocumentFile,
  //     proofOfIncomeFile,
  //     proofOfAddressFile,
  //     selectIncome,
  //   })
  // }, [
  //   holdingDocumentFile,
  //   ownDocumentFile,
  //   ownBackDocumentFile,
  //   proofOfIncomeFile,
  //   proofOfAddressFile,
  //   selectIncome,
  // ])

  // const onNextStep = () => {
  //   if (holdingDocumentFile === '') {
  //     setErrors({
  //       holdingDocument:
  //         'O envio da sua foto segurando o documento é obrigatório.',
  //     })
  //     scrollTo(0, 0)
  //     return
  //   }

  //   if (ownDocumentFile === '') {
  //     setErrors({
  //       ownDocument:
  //         'O envio da foto do documento de identificação é obrigatório.',
  //     })
  //     scrollTo(0, 0)
  //     return
  //   }

  //   if (ownBackDocumentFile === '') {
  //     setErrors({
  //       ownBackDocument:
  //         'O envio da foto do documento de identificação é obrigatório.',
  //     })
  //     scrollTo(0, 0)
  //     return
  //   }

  //   if (!isPatientLinkedCompany && selectIncome === '') {
  //     setErrors({
  //       selectIncome: 'A escolha da sua faixa de renda é obrigatório.',
  //     })
  //     scrollTo(0, 0)
  //     return
  //   }

  //   setErrors({})
  //   nextStep()
  // }

  return (
    <Container>
      <h1>Documentos</h1>
      {/* <HoldingDocument
             onGetFile={setHoldingDocumentFile}
             holdingDocumentFile={holdingDocumentFile}
             error={errors.holdingDocument}
          />

          <OwnDocument
             hasPreviousDocument={!!holdingDocumentFile}
             onGetFile={setOwnDocumentFile}
             ownDocumentFile={ownDocumentFile}
             error={errors.ownDocument}
          />

          <OwnBackDocument
             hasPreviousDocument={!!holdingDocumentFile && !!ownDocumentFile}
             onGetFile={setOwnBackDocumentFile}
             ownBackDocumentFile={ownBackDocumentFile}
             error={errors.ownBackDocument}
          />

          <ProofOfAddress
            hasPreviousDocument={
               !!holdingDocumentFile &&
               !!ownDocumentFile &&
               !!ownBackDocumentFile
             }
             onGetFile={setProofOfAddressFile}
             proofOfAddressFile={proofOfAddressFile}
          />

          {!isPatientLinkedCompany && (
            <ProofOfIncome
               hasPreviousDocument={
                 !!holdingDocumentFile &&
                 !!ownDocumentFile &&
                 !!ownBackDocumentFile
               }
               onGetFile={setProofOfIncomeFile}
               proofOfIncomeFile={proofOfIncomeFile}
               onSelectIncome={setSelectIncome}
               selectIncome={selectIncome}
               error={errors.selectIncome}
            />
          )} */}
    </Container>
  )
}