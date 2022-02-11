import { RegisterDataState } from '../hooks'
import { formatCpf } from '@/helpers/formatCpf'

interface InitialFromApi {
  idPaciente?: number
  nome?: string
  email?: string
  sexo?: string
  dataNascimento?: string
  telefone?: string
  cpf?: string
  company?: string
  endereco: {
    cep?: string
    uf?: string
    cidade?: string
    logradouro?: string
    numero?: string
    bairro?: string
    complemento?: string
  }
  dependentes: {
    idPaciente?: number
    nome?: string
    cpf?: string
    email?: string
    sexo?: string
    dataNascimento?: string
    telefone?: string
  }[]
}

export const initialRegisterPatientFromApi = (
  initialRegisterPatientFromApi: InitialFromApi,
): RegisterDataState => {
  return {
    registrationData: {
      id: initialRegisterPatientFromApi.idPaciente,
      name: initialRegisterPatientFromApi.nome,
      email: initialRegisterPatientFromApi.email,
      gender: initialRegisterPatientFromApi.sexo,
      birthdate: initialRegisterPatientFromApi.dataNascimento,
      phone: initialRegisterPatientFromApi.telefone,
      cpf: initialRegisterPatientFromApi.cpf,
      company: initialRegisterPatientFromApi.company,
    },
    address: {
      cep: initialRegisterPatientFromApi.endereco?.cep,
      uf: initialRegisterPatientFromApi.endereco?.uf,
      city: initialRegisterPatientFromApi.endereco?.cidade,
      address: initialRegisterPatientFromApi.endereco?.logradouro,
      numberHome: initialRegisterPatientFromApi.endereco?.numero,
      district: initialRegisterPatientFromApi.endereco?.bairro,
      complement: initialRegisterPatientFromApi.endereco?.complemento,
    },
    dependents: initialRegisterPatientFromApi.dependentes.map((dependent) => ({
      id: dependent.idPaciente,
      name: dependent.nome,
      cpf: formatCpf(dependent.cpf),
      email: dependent.email,
      gender: dependent.sexo,
      birthdate: dependent.dataNascimento,
      phone: dependent.telefone,
    })),
  }
}
