import { isObjectEmpty } from '@/helpers/isObjectEmpty'
import { formatCpf } from '@/helpers/formatCpf'
import { formatPhone } from '@/helpers/formatPhone'
import formatCnpj from '@/helpers/formatCnpj'
import {
  ResponseApi,
  PatientData,
  PatientAddress,
  Dependent,
} from '../types/index'

export interface fromApiResponse {
  patientData: PatientData
  dependentData: PatientData | undefined
}

const genderFromApi = (gender: string) => {
  const genderObject: { [x: string]: string } = {
    M: 'Masculino',
    F: 'Feminino',
    O: 'Outros',
  }

  return genderObject[gender] || 'Não definido'
}

export const fromApiPatientData = (data: ResponseApi): fromApiResponse => {
  let patientDataFromApi
  let dependentFromApi

  if (isObjectEmpty(data.titular)) {
    // É TITULAR
    patientDataFromApi = {
      id: data.idPaciente,
      name: data.nome,
      cpf: formatCpf(data.cpf),
      birthDate: data.dataNascimento,
      gender: data.sexo,
      phone: formatPhone(data.telefone),
      email: data.email,
      planName: data.plano ? data.plano.nome : '-',
      tableName: data.tabela ? data.tabela.nome : '-',
      company: {
        corporateName:
          data.empresa.length > 0 ? data.empresa[0].razaoSocial : '-',
        cnpj: data.empresa.length > 0 ? formatCnpj(data.empresa[0].cnpj) : '-',
      },
    }
  } else {
    // É DEPENDENTE
    patientDataFromApi = {
      id: data.titular.idPaciente,
      name: data.titular.nome,
      cpf: formatCpf(data.cpf),
      birthDate: data.dataNascimento,
      gender: genderFromApi(data.sexo),
      phone: formatPhone(data.telefone),
      email: data.titular.email,
      planName: data.titular.plano ? data.titular.plano.nome : '-',
      tableName: data.titular.tabela ? data.titular.tabela.nome : '-',
      company: {
        corporateName:
          data.empresa.length > 0 ? data.empresa[0].razaoSocial : '-',
        cnpj: data.empresa.length > 0 ? formatCnpj(data.empresa[0].cnpj) : '-',
      },
    }

    dependentFromApi = {
      id: data.idPaciente,
      name: data.nome,
      cpf: formatCpf(data.cpf),
      birthDate: data.dataNascimento,
      gender: data.sexo,
      phone: formatPhone(data.telefone),
      email: data.email,
    }
  }

  return {
    patientData: patientDataFromApi,
    dependentData: dependentFromApi,
  }
}

export const fromApiPatientAddress = (data: ResponseApi): PatientAddress => {
  return {
    cep: data.endereco.cep,
    uf: data.endereco.uf,
    city: data.endereco.cidade,
    address: data.endereco.logradouro,
    number: data.endereco.numero,
    district: data.endereco.bairro,
    complement: data.endereco.complemento,
  }
}

export const fromApiPatientTable = (data: ResponseApi): string => {
  return data.status !== 'N' && data.tabela ? data.tabela.nome : ''
}

export const fromApiDependents = (
  data: ResponseApi,
): Dependent[] | undefined => {
  const patientDependents = data.dependentes?.map((dependent) => {
    return {
      id: dependent.idPaciente,
      name: dependent.nome,
      cpf: formatCpf(dependent.cpf),
      birthDate: dependent.dataNascimento,
      gender: dependent.sexo,
      phone: formatPhone(dependent.telefone),
      email: dependent.email,
    }
  })

  console.log('patientDependents: ', patientDependents)

  return patientDependents
}

// export const fromApiTitular = (data: any): any => {
//   return {
//     name: data.titular.nome,
//     cpf: data.titular.cpf,
//     birthDate: data.titular.dataNascimento,
//     gender: data.titular.genero,
//     phone: data.titular.telefone,
//     email: data.titular.email,
//     planName: data.titular.plano ? data.titular.plano.nome : '-',
//     tableName: data.titular.tabela ? data.titular.tabela.nome : '-',
//     company: {
//       corporateName:
//         data.empresa.length > 0 ? data.empresa[0].razaoSocial : '-',
//       cnpj: data.empresa.length > 0 ? data.empresa[0].cnpj : '-',
//     },
//   }
// }
