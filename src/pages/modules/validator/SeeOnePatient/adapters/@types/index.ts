import {
  PatientDataHolder,
  PatientAddress,
  PatientData,
} from './../../@types/index'

export interface FromApiResponse {
  idPaciente: number
  nome: string
  cpf: string
  dataNascimento: string
  sexo: string
  telefone: string
  email: string
  plano: {
    nome: string
  }
  tabela: {
    nome: string
  }
  empresa: string
  renda: string
  dependentes: {
    idPaciente: number
    nome: string
    cpf: string
    dataNascimento: string
    sexo: string
    telefone: string
    email: string
  }[]
  endereco: {
    cep: string
    uf: string
    cidade: string
    logradouro: string
    numero: string
    bairro: string
    complemento: string
  }
  titular: {
    idPaciente: number
    nome: string
    cpf: string
    dataNascimento: string
    sexo: string
    telefone: string
    email: string
    plano: {
      nome: string
    }
    tabela: {
      nome: string
    }
    empresa: string
  }
}
export interface FromApi {
  patientData: PatientData & PatientDataHolder
  patientDependents: PatientData[]
  patientAddress: PatientAddress
  dependent: PatientData | undefined
  incomeType: string
}