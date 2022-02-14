export const AddressfromApi = (data) => {
  return {
    address: data.logradouro,
    district: data.bairro,
    city: data.localidade,
    state: data.uf,
  }
}
