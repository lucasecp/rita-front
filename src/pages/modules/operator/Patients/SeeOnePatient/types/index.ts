export interface PatientData {
  id: number
  name: string
  cpf: string
  birthDate: string
  gender: string
  phone: string
  email: string
  planName?: string
  tableName?: string
  company?: {
    corporateName: string
    cnpj: string
  }
  error?: boolean
}

export interface PatientAddress {
  cep: string
  uf: string
  city: string
  address: string
  number: string
  district: string
  complement: string
}

export interface Dependent {
  id: number
  name: string
  cpf: string
  birthDate: string
  gender: string
  phone: string
  email: string
  error?: boolean
}

export interface Validations {
  documentOk: string
  resonDocumentNotOk: any
  incomeOk: string
  validatorName: any
  dateAndHour: string | undefined
  status: any
  table: string
}

export interface ResponseApi {
  idPaciente: number
  nome: string
  canal: string
  cpf: string
  dataNascimento: string
  email: string
  renda: string
  sexo: string
  status: string
  telefone: string
  titular?: any
  validacao: {
    idPaciente: number
  }
  tabela: {
    nome: string
  }
  plano: {
    nome: string
    data: string
    valor: number
  }
  endereco: {
    bairro: string
    cep: string
    cidade: string
    complemento: string
    logradouro: string
    numero: string
    uf: string
  }
  dependentes?: {
    cpf: string
    dataNascimento: string
    email: string
    idPaciente: number
    nome: string
    sexo: string
    telefone: string
  }[]
  documentos: {
    caminho: string
    cpf: string
    id: string
    nomeOriginal: string
    tipoArquivo: string
  }[]
  empresa: {
    nome: string
    razaoSocial: string
    cnpj: string
  }[]
}
