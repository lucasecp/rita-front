import formatDate from '@/helpers/formatDate'
import formatIncome from './formatIncome'
import { statusFromApi, statusToApi } from './showStatus'

export const fromApi = (dependentInfo) => {

  return {
    personalDatas: {
      name: dependentInfo.nome,
      cpf: dependentInfo.cpf,
      gender: dependentInfo.genero,
      birthdate: formatDate(dependentInfo.dataNascimento),
      phone: dependentInfo.celular,
      email: dependentInfo.email,
      status: statusFromApi(dependentInfo.status),
      table: dependentInfo.tabela?.nome,
      income: formatIncome(dependentInfo.renda),
      plan: {
        name: dependentInfo.plano?.nome,
        startDate: formatDate(dependentInfo.plano?.dataAtivacao),
        endDate: formatDate(dependentInfo.tabela?.dataVencimentoTabela),
      },
      documents: dependentInfo.documentosCadastrados?.reduce((ac, doc) => {
        ac[doc?.tipoArquivo] = true
        return ac
      }, {}),
    },

    address: {
      cep: dependentInfo.cep,
      uf: dependentInfo.uf,
      city: dependentInfo.cidade,
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
    dataNascimento: personalDatas.birthdate,
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
