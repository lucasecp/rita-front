import formatDate from '@/helpers/formatDate'
import { formatIncome } from './formatIncome'
import { statusFromApi } from './showStatus'

import { DependentResponseApi, DependentDataType } from '../types'

export const fromApi = (
  dependentInfo: DependentResponseApi,
): DependentDataType => {
  return {
    personalDatas: {
      name: dependentInfo.nome,
      cpf: dependentInfo.cpf,
      gender: dependentInfo.genero,
      birthdate: formatDate(dependentInfo.dataNascimento),
      phone: dependentInfo.celular,
      email: dependentInfo.email,
      status: statusFromApi(dependentInfo.status),
      income: formatIncome(dependentInfo.renda),
    },

    documents: dependentInfo.documentosCadastrados?.reduce((ac, doc) => {
      ac[doc?.tipoArquivo] = true
      return ac
    }, {}),

    address: {
      cep: dependentInfo.cep,
      uf: dependentInfo.uf,
      city: dependentInfo.cidade,
      address: dependentInfo.endereco,
      number: dependentInfo.numero,
      district: dependentInfo.bairro,
      complement: dependentInfo.complemento,
    },

    situation: {
      plan: {
        name: dependentInfo.plano?.nome,
        startDate: formatDate(dependentInfo.plano?.dataAtivacao),
        endDate: formatDate(dependentInfo.tabela?.dataVencimentoTabela),
      },
      table: dependentInfo.tabela?.nome,
    },
  }
}
