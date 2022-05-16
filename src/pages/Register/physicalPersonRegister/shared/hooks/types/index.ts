import { SelectedPlan } from '../../../ChoosePlan/components/Card'

export interface RegionState {
  uf: string
  city: string
}

export interface PlanState {
  idPlan: number | 0
  name: string | ''
  allowedMajorAge: boolean | null
  maximumDependentsQuantity: number | null
  price: string | ''
  periodicity: string | ''
}

export interface RegistrationDataState {
  name: string
  email: string
  gender: string
  birthdate: string
  phone: string
  cpf: string
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

export interface DependentState {
  name: string
  cpf: string
  email: string
  gender: string
  birthDate: string
  phone: string
}

export interface PhysicalPersonRegisterContextData {
  region: {
    get: RegionState
    set: React.Dispatch<React.SetStateAction<RegionState>>
  }
  selectedPlan: {
    get: SelectedPlan
    set: React.Dispatch<React.SetStateAction<SelectedPlan>>
  }
  registrationData: {
    get: RegistrationDataState
    set: React.Dispatch<React.SetStateAction<RegistrationDataState>>
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
  planAllowDependentMajorAge: {
    get: boolean
    set: React.Dispatch<React.SetStateAction<boolean>>
  }
  dependents: {
    get: DependentState[]
    set: React.Dispatch<React.SetStateAction<DependentState[]>>
  }
  finishRegister: () => void
  cpf: {
    get: string
    set: React.Dispatch<React.SetStateAction<string>>
  }
  // resetData: () => void
}
