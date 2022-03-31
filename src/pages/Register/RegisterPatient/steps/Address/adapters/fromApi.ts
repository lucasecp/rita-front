interface AddressFromApi {
  cep: string
  logradouro: string
  tipo: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  unidade: string
  ibge: string
  gia: string
}

interface Address {
  address: string
  type: string
  district: string
  city: string
  uf: string
}

export const addressFromApi = (address: AddressFromApi): Address => {
  return {
    address: address.logradouro,
    type: address.tipo,
    district: address.bairro,
    city: address.localidade,
    uf: address.uf,
  }
}
