import React, { useEffect, useMemo, useState } from 'react'

import HoldingDocument from './types/HoldingDocument'
import OwnDocument from './types/OwnDocument'
import OwnBackDocument from './types/OwnBackDocument'
import ProofOfIncome from './types/ProofOfIncome'
import ProofOfAddress from './types/ProofOfAddress'

import ButtonPrimary from '@/components/Button/Primary'
import ButtonLink from '@/components/Button/Link'

import { useRegisterPatient } from '../../hooks'

import { Container } from './styles'

export const Documents = ({ isActive }) => {
  const { isPatientLinkedCompany, setDocumentsFile, previousStep, nextStep } =
    useRegisterPatient()

  const [holdingDocumentFile, setHoldingDocumentFile] = useState('')
  const [ownDocumentFile, setOwnDocumentFile] = useState('')
  const [ownBackDocumentFile, setOwnBackDocumentFile] = useState('')
  const [proofOfIncomeFile, setProofOfIncomeFile] = useState('')
  const [proofOfAddressFile, setProofOfAddressFile] = useState('')
  const [selectIncome, setSelectIncome] = useState('')

  const [errors, setErrors] = useState({
    holdingDocument: '',
    ownDocument: '',
    ownBackDocument: '',
    selectIncome: '',
  })

  // const verifySavedFiles = () => {
  //   // if (!Object.keys(savedFiles).length) return
  //   setHoldingDocumentFile(savedFiles?.holdingDocumentFile || '')
  //   setOwnDocumentFile(savedFiles?.ownDocumentFile || '')
  //   setOwnBackDocumentFile(savedFiles?.ownBackDocumentFile || '')
  //   setProofOfIncomeFile(savedFiles?.proofOfIncomeFile || '')
  //   setProofOfAddressFile(savedFiles?.proofOfAddressFile || '')
  //   setSelectIncome(savedFiles?.selectIncome || '')
  // }

  // useEffect(() => {
  //   verifySavedFiles()
  // }, [])

  useEffect(() => {
    setDocumentsFile({
      holdingDocumentFile,
      ownDocumentFile,
      ownBackDocumentFile,
      proofOfIncomeFile,
      proofOfAddressFile,
      selectIncome,
    })
  }, [
    holdingDocumentFile,
    ownDocumentFile,
    ownBackDocumentFile,
    proofOfIncomeFile,
    proofOfAddressFile,
    selectIncome,
  ])

  const onNextStep = () => {
    if (holdingDocumentFile === '') {
      setErrors({
        holdingDocument:
          'O envio da sua foto segurando o documento é obrigatório.',
      })
      scrollTo(0, 0)
      return
    }

    if (ownDocumentFile === '') {
      setErrors({
        ownDocument:
          'O envio da foto do documento de identificação é obrigatório.',
      })
      scrollTo(0, 0)
      return
    }

    if (ownBackDocumentFile === '') {
      setErrors({
        ownBackDocument:
          'O envio da foto do documento de identificação é obrigatório.',
      })
      scrollTo(0, 0)
      return
    }

    if (!isPatientLinkedCompany && selectIncome === '') {
      setErrors({
        selectIncome: 'A escolha da sua faixa de renda é obrigatório.',
      })
      scrollTo(0, 0)
      return
    }

    setErrors({})
    nextStep()
  }

  return (
    <Container active={isActive}>
      <div>
        <h1>Documentos</h1>
        <HoldingDocument
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
            !!holdingDocumentFile && !!ownDocumentFile && !!ownBackDocumentFile
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
        )}
      </div>
      <footer>
        <ButtonLink onClick={previousStep}>Etapa Anterior</ButtonLink>
        <ButtonPrimary onClick={onNextStep}>Próxima Etapa</ButtonPrimary>
      </footer>
    </Container>
  )
}
