import { RegistrationDataState, AddressState, DependentState } from '../types'

interface RegisterDataState {
  registrationData?: RegistrationDataState
  address?: AddressState
  dependents?: DependentState[]
  selectedIncome: string
}

interface ToApi {
  nome?: string
  email?: string
  sexo?: string
  dataNascimento?: string
  telefone?: string
  cpf?: string
  renda?: string
  endereco: {
    cep?: string
    uf?: string
    cidade?: string
    logradouro?: string
    numero?: string
    bairro?: string
    complemento?: string
  }
  dependentes?: {
    nome?: string
    cpf?: string
    email?: string
    sexo?: string
    dataNascimento?: string
    telefone?: string
  }[]
}

const incomeToApi = (income = '') => {
  const incomeObject: { [x: string]: string } = {
    no_income: 'NaopossuoRenda',
    one_half: 'AteUmSalarioMinimoEMeio',
    more_one_half: 'AcimaDeUmSalarioMinimoEMeio',
  }

  return incomeObject[income]
}

export const registerPatientToApi = (
  registerPatient: RegisterDataState,
): ToApi => {
  return {
    nome: registerPatient.registrationData.name,
    email: registerPatient.registrationData.email,
    sexo: registerPatient.registrationData.gender,
    dataNascimento: registerPatient.registrationData.birthdate,
    telefone: registerPatient.registrationData.phone,
    cpf: registerPatient.registrationData.cpf,
    renda: incomeToApi(registerPatient.selectedIncome),
    endereco: {
      cep: registerPatient.address?.cep,
      uf: registerPatient.address?.uf,
      cidade: registerPatient.address?.city,
      logradouro: registerPatient.address?.street,
      numero: registerPatient.address?.number,
      bairro: registerPatient.address?.district,
      complemento: registerPatient.address?.complement,
    },
    dependentes: registerPatient.dependents?.map((dependent) => ({
      nome: dependent.name,
      cpf: dependent.cpf,
      email: dependent.email,
      sexo: dependent.gender,
      dataNascimento: dependent.birthDate,
      telefone: dependent.phone,
    })),
  }
}
