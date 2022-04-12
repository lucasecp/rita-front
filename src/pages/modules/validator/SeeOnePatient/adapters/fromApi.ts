import { isObjectEmpty } from '@/helpers/isObjectEmpty'
import { formatCpf } from '@/helpers/formatCpf'
import { formatPhone } from '@/helpers/formatPhone'
import formatCnpj from '@/helpers/formatCnpj'

import { FromApi, FromApiResponse } from './@types/index'

const genderFromApi = (gender: string) => {
  const genderObject: { [x: string]: string } = {
    M: 'Masculino',
    F: 'Feminino',
    O: 'Outros',
  }

  return genderObject[gender] || 'Não definido'
}

const incomeFromApi = (income: string) => {
  const incomeObject: { [x: string]: string } = {
    AcimaDeUmSalarioMinimoEMeio: 'Acima de um salário mínimo e meio',
    NaopossuoRenda: 'Não possui renda',
    AteUmSalarioMinimoEMeio: 'Até um salário mínimo e meio',
  }

  return incomeObject[income] || 'Não Informado'
}

export const fromApi = (data: FromApiResponse): FromApi => {
  let patientDataFromApi
  let dependentFromApi

  if (isObjectEmpty(data.titular)) {
    patientDataFromApi = {
      id: data.idPaciente,
      name: data.nome,
      cpf: formatCpf(data.cpf),
      birthDate: data.dataNascimento,
      gender: genderFromApi(data.sexo),
      phone: formatPhone(data.telefone),
      email: data.email,
      plan: data.plano?.nome,
      table: data.tabela?.nome,
      company: data.empresa[0] && {
        corporateName: data.empresa[0].razaoSocial,
        cnpj: formatCnpj(data.empresa[0].cnpj),
      },
    }
  } else {
    patientDataFromApi = {
      id: data.titular.idPaciente,
      name: data.titular.nome,
      cpf: formatCpf(data.titular.cpf),
      birthDate: data.titular.dataNascimento,
      gender: genderFromApi(data.titular.genero),
      phone: formatPhone(data.titular.telefone),
      email: data.titular.email,
      plan: data.titular.plano?.nome,
      table: data.titular.tabela?.nome,
      company: data.empresa[0] && {
        corporateName: data.empresa[0].razaoSocial,
        cnpj: formatCnpj(data.empresa[0].cnpj),
      },
    }
    dependentFromApi = {
      id: data.idPaciente,
      name: data.nome,
      cpf: formatCpf(data.cpf),
      birthDate: data.dataNascimento,
      gender: genderFromApi(data.sexo),
      phone: formatPhone(data.telefone),
      email: data.email,
      plan: data.titular.plano?.nome,
      table: data.titular.tabela?.nome,
      company: data.empresa[0] && {
        corporateName: data.empresa[0].razaoSocial,
        cnpj: formatCnpj(data.empresa[0].cnpj),
      },
    }
  }

  const patientMapped: FromApi = {
    patientData: patientDataFromApi,
    patientDependents: data?.dependentes.map((dependent) => ({
      id: dependent.idPaciente,
      name: dependent.nome,
      cpf: formatCpf(dependent.cpf),
      birthDate: dependent.dataNascimento,
      gender: genderFromApi(dependent.sexo),
      phone: formatPhone(dependent.telefone),
      email: dependent.email,
    })),
    patientAddress: {
      cep: data.endereco.cep,
      uf: data.endereco.uf,
      city: data.endereco.cidade,
      address: data.endereco.logradouro,
      number: data.endereco.numero,
      district: data.endereco.bairro,
      complement: data.endereco.complemento,
    },
    dependent: dependentFromApi,
    incomeType: incomeFromApi(data.renda),
  }

  return patientMapped
}
