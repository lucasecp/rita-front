export const AddressfromApi = (data: any) => {
  return {
    address: data.logradouro,
    district: data.bairro,
    city: data.localidade,
    state: data.uf,
  }
}
