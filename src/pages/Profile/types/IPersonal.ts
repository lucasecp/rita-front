export interface IDataToDisplayState {
  name: string
  cpf: string
  contractedPlan: string
  status: string
  table: {
    type: string
    validity: string
  }
}

export interface IPersonalDatasState {
  personalDatas: {
    name: string
    birthDate: string
    gender: string
    phone: string
    email: string
  }
  address: {
    cep: string
    uf: string
    city: string
    addressUser: string
    number: string
    district: string
    complement: string
  }
  supplementaryData: {
    contractedPlan: string
    contractedPlanSince: string
    price: string
    channel: string
    company: string
  }
  ownerOfTheAccount: {
    name?: string
    email?: string
    phone?: string
  }
}
