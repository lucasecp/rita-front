import React, { createContext, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import { toast } from '@/styles/components/toastify'
import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'

import apiPatient from '@/services/apiPatient'

import { registerPatientToApi } from './adapters/toApi'

import { RegisterSuccess } from './messages/RegisterSuccess'
import { DocumentsNotSended } from './messages/DocumentsNotSended'

import { PHYSICAL_PERSON_REGISTER_PAYMENT } from '@/routes/constants/namedRoutes/routes'

import {
  RegistrationDataState,
  RegionState,
  PlanState,
  DocumentsState,
  DependentState,
  PhysicalPersonRegisterContextData,
  AddressState,
} from './types'

const PhysicalPersonRegisterContext =
  createContext<PhysicalPersonRegisterContextData>(
    {} as PhysicalPersonRegisterContextData,
  )

const PhysicalPersonRegisterProvider: React.FC = ({ children }) => {
  const { showMessage, closeModal } = useModal()
  const { Loading } = useLoading()
  const history = useHistory()

  const [region, setRegion] = useState({} as RegionState)

  const [selectedPlan, setSelectedPlan] = useState({} as PlanState)
  const [planAllowDependentMajorAge, setPlanAllowDependentMajorAge] =
    useState(false)

  const [cpf, setCpf] = useState('')

  const [registrationData, setRegistrationData] = useState(
    {} as RegistrationDataState,
  )

  const [address, setAddress] = useState({} as AddressState)

  const [documents, setDocuments] = useState({} as DocumentsState)
  const [patientWantsMinimumDependent, setPatientWantsMinimumDependent] =
    useState(0)

  const [dependents, setDependents] = useState(
    [] as DependentState[] | undefined,
  )

  useEffect(() => {
    console.log('🚀 ~ region', region)
    console.log('🚀 ~ selectedPlan', selectedPlan)
    console.log('🚀 ~ address', address)
    console.log('🚀 ~ documents', documents)
    console.log(
      '🚀 ~ patientWantsMinimumDependent',
      patientWantsMinimumDependent,
    )
  }, [region, selectedPlan, address, documents, patientWantsMinimumDependent])

  const resetStates = () => {
    setRegion({} as RegionState)
    setSelectedPlan({} as PlanState)
    setPlanAllowDependentMajorAge(false)
    setCpf('')
    setRegistrationData({} as RegistrationDataState)
    setAddress({} as AddressState)
    setDocuments({} as DocumentsState)
    setPatientWantsMinimumDependent(0)
    setDependents([])
  }

  const finishRegister = async () => {
    const formFile1 = new FormData()
    formFile1.append('file', documents.holdingDocument)
    const formFile2 = new FormData()
    formFile2.append('file', documents.ownFrontDocument)
    const formFile3 = new FormData()
    formFile3.append('file', documents.ownBackDocument)
    const formFile4 = new FormData()
    formFile4.append('file', documents.proofOfAddress)
    const formFile5 = new FormData()
    formFile5.append('file', documents.proofOfIncome)

    try {
      Loading.turnOn()
      await axios.all([
        apiPatient.post(
          `/paciente/documento?cpf=${registrationData.cpf}&tipoDocumento=FotoSegurandoDoc`,
          formFile1,
        ),
        apiPatient.post(
          `/paciente/documento?cpf=${registrationData.cpf}&tipoDocumento=Cpf`,
          formFile2,
        ),
        apiPatient.post(
          `/paciente/documento?cpf=${registrationData.cpf}&tipoDocumento=DocVerso`,
          formFile3,
        ),
        !documents?.proofOfAddress
          ? new Promise((resolve) => {
              resolve('')
            })
          : apiPatient.post(
              `/paciente/documento?cpf=${registrationData.cpf}&tipoDocumento=ComprovanteResi`,
              formFile4,
            ),
        !documents?.proofOfIncome
          ? new Promise((resolve) => {
              resolve('')
            })
          : apiPatient.post(
              `/paciente/documento?cpf=${registrationData.cpf}&tipoDocumento=Renda`,
              formFile5,
            ),
      ])
      closeModal()
    } catch (error) {
      return showMessage(DocumentsNotSended)
    } finally {
      Loading.turnOff()
    }

    try {
      Loading.turnOn()

      const registerPatientMapped = registerPatientToApi({
        registrationData,
        address,
        dependents,
        selectedIncome: documents.selectIncome,
      })
      await apiPatient.post('/paciente', registerPatientMapped)
      showMessage(RegisterSuccess)
    } catch ({ response }) {
      toast.error('Erro ao finalizar cadastro!')
      return
    } finally {
      Loading.turnOff()
    }

    resetStates()
    history.push(PHYSICAL_PERSON_REGISTER_PAYMENT)
    closeModal()
  }

  return (
    <PhysicalPersonRegisterContext.Provider
      value={{
        region: {
          get: region,
          set: setRegion,
        },
        selectedPlan: {
          get: selectedPlan,
          set: setSelectedPlan,
        },
        planAllowDependentMajorAge: {
          get: planAllowDependentMajorAge,
          set: setPlanAllowDependentMajorAge,
        },
        cpf: {
          get: cpf,
          set: setCpf,
        },
        registrationData: {
          get: registrationData,
          set: setRegistrationData,
        },
        address: {
          get: address,
          set: setAddress,
        },
        documents: {
          get: documents,
          set: setDocuments,
        },
        patientWantsMinimumDependent: {
          get: patientWantsMinimumDependent,
          set: setPatientWantsMinimumDependent,
        },
        dependents: {
          get: dependents,
          set: setDependents,
        },
        finishRegister,
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
