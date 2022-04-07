export interface DependentResponseApi {
  assinatura: unknown
  bairro: string
  celular: string
  cep: string
  cidade: string
  complemento: string
  cpf: string
  dataFiliacao: unknown
  dataNascimento: string
  dataValidacao: string
  documentosCadastrados: {
    tipoArquivo: string
  }[]
  email: string
  endereco: string
  genero: string
  nome: string
  numero: string
  plano?: {
    nome: string
    dataAtivacao: string
  }
  renda: string
  status: string
  tabela?: {
    nome: string
    dataVencimentoTabela: string
  }
  uf: string
}

export interface DependentDataType {
  personalDatas: {
    name: string
    cpf: string
    gender: string
    birthdate: string
    phone: string
    email: string
    status: string
    income: string
  }
  documents: any
  address: {
    cep: string
    uf: string
    city: string
    address: string
    number: string
    district: string
    complement: string
  }
  situation: {
    plan: {
      name: string
      startDate: string
      endDate: string
    }
    table: string
  }
}
