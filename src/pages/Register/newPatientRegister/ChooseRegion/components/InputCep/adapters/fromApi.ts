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
  city: string
  uf: string
}

export const addressFromApi = (address: AddressFromApi): Address => {
  return {
    city: address.localidade,
    uf: address.uf,
  }
}
