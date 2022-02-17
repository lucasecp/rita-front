import { StatusSellableItems } from '@/pages/SellableItems/FilterSellableItems/@types'
import { RegisterDataState, DocumentsState } from '../index'

interface ToApi {
  idPaciente?: number
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
    idPaciente?: number
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
  registerPatient: RegisterDataState & { documentsFile?: DocumentsState },
): ToApi => {
  console.log(registerPatient)

  return {
    idPaciente: registerPatient.registrationData?.id,
    nome: registerPatient.registrationData?.name,
    email: registerPatient.registrationData?.email,
    sexo: registerPatient.registrationData?.gender,
    dataNascimento: registerPatient.registrationData?.birthdate,
    telefone: registerPatient.registrationData?.phone,
    cpf: registerPatient.registrationData?.cpf,
    renda: incomeToApi(registerPatient.documentsFile?.selectIncome),
    endereco: {
      cep: registerPatient.address?.cep,
      uf: registerPatient.address?.uf,
      cidade: registerPatient.address?.city,
      logradouro: registerPatient.address?.address,
      numero: registerPatient.address?.numberHome,
      bairro: registerPatient.address?.district,
      complemento: registerPatient.address?.complement,
    },
    dependentes: registerPatient.dependents?.map((dependent) => ({
      idPaciente: dependent.id,
      nome: dependent.name,
      cpf: dependent.cpf,
      email: dependent.email,
      sexo: dependent.gender,
      dataNascimento: dependent.birthdate,
      telefone: dependent.phone,
    })),
  }
}
