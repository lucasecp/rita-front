// export interface RegistrationDataState {
//   id?: number
//   name?: string
//   email?: string
//   gender?: string
//   birthdate?: string
//   phone?: string
//   cpf?: string
//   company?: string
// }

import { SelectedPlan } from '../../../ChoosePlan/components/Card'
import { MappedPlan } from '../../../ChoosePlan'

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

export interface AddressState {
  cep?: string
  uf?: string
  city?: string
  street?: string
  number?: string
  district?: string
  complement?: string
}

export interface DocumentsState {
  holdingDocument: File | string
  ownFrontDocument: File | string
  ownBackDocument: File | string
  proofOfAddress?: File | string
  proofOfIncome?: File | string
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
  region: {
    get: RegionState
    set: React.Dispatch<React.SetStateAction<RegionState>>
  }
  selectedPlan: {
    get: SelectedPlan
    set: React.Dispatch<React.SetStateAction<SelectedPlan>>
  }
  address: {
    get: AddressState
    set: React.Dispatch<React.SetStateAction<AddressState>>
  }
  documents: {
    get: DocumentsState
    set: React.Dispatch<React.SetStateAction<DocumentsState>>
  }
  patientWantsMinimumDependent: {
    get: number
    set: React.Dispatch<React.SetStateAction<number>>
  }
  dependents: {
    get: DependentsState[]
    set: React.Dispatch<React.SetStateAction<DependentsState[]>>
  }
  finishRegister: () => void
  // cpfHolder?: string
  // isPatientLinkedCompany: boolean
  // limitOfDependents: number
  // initialRegisterData: RegisterDataState
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
