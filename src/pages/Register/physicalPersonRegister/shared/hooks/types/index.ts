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

export interface DocumentsState {
  holdingDocumentFile: File | string
  ownFrontDocumentFile: File | string
  ownBackDocumentFile: File | string
  proofOfAddressFile?: File | string
  proofOfIncomeFile?: File | string
  selectIncome: string
}

// export interface DependentsState {
//   id?: number
//   name?: string
//   cpf?: string
//   email?: string
//   gender?: string
//   birthdate?: string
//   phone?: string
// }

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
  setDocumentsFile: React.Dispatch<React.SetStateAction<DocumentsState>>
  patientWantsDependent: {
    get: boolean
    set: React.Dispatch<React.SetStateAction<boolean>>
  }
  finishRegister: () => void
  // cpfHolder?: string
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
