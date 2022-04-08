interface DependentData {
  gender: string
  email: string
}

interface DependentAddress {
  cep: string
  addressDep: string
  number: string
  complement: string
  district: string
  city: string
  uf: string
}

interface DependentDataToApi {
  sexo: string
  email: string
  endereco: {
    cep: string
    logradouro: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    uf: string
  }
}

export const toApi = (
  data: DependentData,
  address: DependentAddress,
): DependentDataToApi => {
  return {
    sexo: data.gender,
    email: data.email,
    endereco: {
      cep: address.cep,
      logradouro: address.addressDep,
      numero: address.number,
      complemento: address.complement,
      bairro: address.district,
      cidade: address.city,
      uf: address.uf,
    },
  }
}
