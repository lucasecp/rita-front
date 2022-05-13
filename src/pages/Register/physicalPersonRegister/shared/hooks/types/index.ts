import { SelectedPlan } from '../../../ChoosePlan/components/Card'
import { MappedPlan } from '../../../ChoosePlan'

export interface RegistrationDataState {
  name: string
  email: string
  gender: string
  birthdate: string
  phone: string
  cpf: string
}

// export interface AddressState {
//   cep?: string
//   uf?: string
//   city?: string
//   address?: string
//   numberHome?: string
//   district?: string
//   complement?: string
// }

export interface RegionState {
  uf: string
  city: string
}

export interface PlanState {
  idPlan: number | 0
  name: string | ''
  allowedMajorAge: boolean | null
  maximumDependentsQuantity: number | null
}

export interface DocumentsState {
  holdingDocumentFile: File | string
  ownFrontDocumentFile: File | string
  ownBackDocumentFile: File | string
  proofOfAddressFile?: File | string
  proofOfIncomeFile?: File | string
  selectIncome: string
}

export interface DependentsState {
  name: string
  cpf: string
  email: string
  gender: string
  birthDate: string
  phone: string
}

// export interface RegisterDataState {
//   registrationData?: RegistrationDataState
//   address?: AddressState
//   dependents?: DependentsState[]
// }

export interface PhysicalPersonRegisterContextData {
  registrationData: {
    get: RegistrationDataState
    set: React.Dispatch<React.SetStateAction<RegistrationDataState>>
  }
  selectedPlan: {
    get: SelectedPlan
    set: React.Dispatch<React.SetStateAction<SelectedPlan>>
  }
  region: {
    get: RegionState
    set: React.Dispatch<React.SetStateAction<RegionState>>
  }
  setDocumentsFile: React.Dispatch<React.SetStateAction<DocumentsState>>
  patientWantsMinimumDependent: {
    get: number
    set: React.Dispatch<React.SetStateAction<number>>
  }
  planAllowDependentMajorAge: {
    get: boolean
    set: React.Dispatch<React.SetStateAction<boolean>>
  }
  dependents: {
    get: DependentsState[]
    set: React.Dispatch<React.SetStateAction<DependentsState[]>>
  }
  finishRegister: () => void
  cpf: {
    get: string
    set: React.Dispatch<React.SetStateAction<string>>
  }
  // isPatientLinkedCompany: boolean
  // limitOfDependents: number
  // initialRegisterData: RegisterDataState
  // isActiveStep: (stepNumber: number) => boolean
  // currentStep: number
  // previousStep: () => void
  // nextStep: () => void
  // setInitialRegisterData: React.Dispatch<
  //   React.SetStateAction<RegisterDataState>
  // >
  // setRegistrationData: React.Dispatch<
  //   React.SetStateAction<RegistrationDataState | undefined>
  // >
  // onGetAddress: React.Dispatch<React.SetStateAction<AddressState | undefined>>
  // setDependents: React.Dispatch<
  //   React.SetStateAction<DependentsState[] | undefined>
  // >
  // resetData: () => void
}
