import React, { createContext, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { toast } from '@/styles/components/toastify'
import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'

import apiPatient from '@/services/apiPatient'
import axios from 'axios'

// import { registerPatientToApi } from './adapters/toApi'

import { RegisterSuccess } from './messages/RegisterSuccess'
import { DocumentsNotSended } from './messages/DocumentsNotSended'

import {
  // RegistrationDataState,
  // AddressState,
  // DependentsState,
  // RegisterDataState,
  RegionState,
  DocumentsState,
  PhysicalPersonRegisterContextData,
} from './types'

import { PHYSICAL_PERSON_REGISTER_PAYMENT } from '@/routes/constants/namedRoutes/routes'

const PhysicalPersonRegisterContext =
  createContext<PhysicalPersonRegisterContextData>(
    {} as PhysicalPersonRegisterContextData,
  )

const PhysicalPersonRegisterProvider: React.FC = ({ children }) => {
  const { showMessage, closeModal } = useModal()
  const { Loading } = useLoading()
  const history = useHistory()

  // const [initialRegisterData, setInitialRegisterData] = useState(
  //   {} as RegisterDataState,
  // )

  // const [registrationData, setRegistrationData] = useState(
  //   {} as RegistrationDataState | undefined,
  // )

  // const [address, setAddress] = useState({} as AddressState | undefined)

  const [region, setRegion] = useState({} as RegionState)

  const [documentsFile, setDocumentsFile] = useState({} as DocumentsState)

  const [patientWantsDependent, setPatientWantsDependent] = useState(false)

  useEffect(() => {
    console.log(documentsFile)
  }, [documentsFile])

  // const [dependents, setDependents] = useState(
  //   [] as DependentsState[] | undefined,
  // )

  // const resetData = () => {
  //   setRegistrationData({})
  //   setAddress({})
  //   setDocumentsFile({} as DocumentsState)
  //   setDependents([])
  //   setStep(1)
  // }

  const finishRegister = async () => {
    console.log('finish register')

    //   const formFile1 = new FormData()
    //   formFile1.append('file', documentsFile.holdingDocumentFile)
    //   const formFile2 = new FormData()
    //   formFile2.append('file', documentsFile.ownDocumentFile)
    //   const formFile3 = new FormData()
    //   formFile3.append('file', documentsFile.ownBackDocumentFile)
    //   const formFile4 = new FormData()
    //   formFile4.append('file', documentsFile.proofOfAddressFile)
    //   const formFile5 = new FormData()
    //   formFile5.append('file', documentsFile.proofOfIncomeFile)
    //   try {
    //     Loading.turnOn()
    //     await axios.all([
    //       apiPatient.post(
    //         `/paciente/documento?cpf=${registrationData?.cpf}&tipoDocumento=FotoSegurandoDoc`,
    //         formFile1,
    //       ),
    //       apiPatient.post(
    //         `/paciente/documento?cpf=${registrationData?.cpf}&tipoDocumento=Cpf`,
    //         formFile2,
    //       ),
    //       apiPatient.post(
    //         `/paciente/documento?cpf=${registrationData?.cpf}&tipoDocumento=DocVerso`,
    //         formFile3,
    //       ),
    //       !documentsFile?.proofOfAddressFile
    //         ? new Promise((resolve) => {
    //             resolve('')
    //           })
    //         : apiPatient.post(
    //             `/paciente/documento?cpf=${registrationData?.cpf}&tipoDocumento=ComprovanteResi`,
    //             formFile4,
    //           ),
    //       !documentsFile?.proofOfIncomeFile
    //         ? new Promise((resolve) => {
    //             resolve('')
    //           })
    //         : apiPatient.post(
    //             `/paciente/documento?cpf=${registrationData?.cpf}&tipoDocumento=Renda`,
    //             formFile5,
    //           ),
    //     ])
    //     closeModal()
    //   } catch (error) {
    //     console.log(error)
    //     return showMessage(DocumentsNotSended)
    //   } finally {
    //     Loading.turnOff()
    //   }
    //   try {
    //     Loading.turnOn()
    //     const registerPatientMapped = registerPatientToApi({
    //       registrationData,
    //       address,
    //       documentsFile,
    //       dependents,
    //     })
    //     await apiPatient.post('/paciente', registerPatientMapped)
    //     showMessage(RegisterSuccess)
    //   } catch ({ response }) {
    //     toast.error('Erro ao finalizar cadastro!')
    //     return
    //   } finally {
    //     Loading.turnOff()
    //   }

    history.push(PHYSICAL_PERSON_REGISTER_PAYMENT)
    closeModal()
  }

  return (
    <PhysicalPersonRegisterContext.Provider
      value={{
        setDocumentsFile,
        finishRegister,
        patientWantsDependent: {
          get: patientWantsDependent,
          set: setPatientWantsDependent,
        },
        // cpfHolder: registrationData?.cpf,
        // isPatientLinkedCompany,
        // limitOfDependents,
        // initialRegisterData,
        // isActiveStep,
        // currentStep: step,
        // previousStep,
        // nextStep,
        // setInitialRegisterData,
        // setRegistrationData,
        // onGetAddress: setAddress,
        // setDependents,
        // resetData,
      }}
    >
      {children}
    </PhysicalPersonRegisterContext.Provider>
  )
}

const usePhysicalPersonRegister = (): PhysicalPersonRegisterContextData => {
  const context = useContext(PhysicalPersonRegisterContext)

  return context
}

export { PhysicalPersonRegisterProvider, usePhysicalPersonRegister }
