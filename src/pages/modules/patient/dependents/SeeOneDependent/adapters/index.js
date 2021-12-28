import { statusFromApi, statusToApi } from './showStatus'

export const fromApi = (dependentInfo) => {
  return {
    personalDatas: {
      name: dependentInfo.nome,
      cpf: dependentInfo.cpf,
      gender: dependentInfo.sexo,
      birthdate: dependentInfo.dataNascimento,
      phone: dependentInfo.telefone,
      email: dependentInfo.email,
      status: statusFromApi(dependentInfo.status),
    },

    address: {
      cep: dependentInfo.cep,
      uf: dependentInfo.uf,
      city: dependentInfo.municipio,
      address: dependentInfo.endereco,
      number: dependentInfo.numero,
      district: dependentInfo.bairro,
      complement: dependentInfo.complemento,
    },
  }
}

export const toApi = (personalDatas, address) => {
  return {
    nome: personalDatas.name,
    sexo: personalDatas.gender,
    dataNascimento: personalDatas.birthDate,
    telefone: personalDatas.phone,
    email: personalDatas.email,
    status: statusToApi(personalDatas.status),

    cep: address.cep,
    logradouro: address.address,
    numero: address.number,
    complemento: address.complement,
    bairro: address.district,
    municipio: address.city,
    uf: address.uf,
  }
}

// {
//   "idPaciente": 4880811,
//   "nome": "Hiago Alves ",
//   "cpf": "09872058032",
//   "sexo": "M",
//   "dataNascimento": "01/02/1985",
//   "telefone": "(61) 98498-4848",
//   "email": "teste@teste.com"
// }
