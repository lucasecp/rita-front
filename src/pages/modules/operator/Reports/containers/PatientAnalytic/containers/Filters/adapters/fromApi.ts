import formatDate from '@/helpers/formatDate'
import { PatientAnalyticPreviewState } from './../../../index'

import { formatCpf } from '@/helpers/formatCpf'
import { formatPhone } from '@/helpers/formatPhone'

interface PreviewPatientAnalyticFromApi {
  dados: {
    idPaciente: number
    nome: string
    cpf: string
    uf: string
    cidade: string
    logradouro: string
    cep: string
    telefone: string
    email: string
    bairro: string
    dataNascimento: string
    status: string
    sexo: string
    numero: string
    complemento: string
    dataValidacao: string
    dataInativacao: string
    plano: {
      idPlano: number
      nome: string
    }
    tabelaPaciente: {
      id: number
      nome: string
    }
    titulares: unknown[]
    usuario: {
      dataCadastro: string
      bloqueado: string
    }
  }[]
  total: number
}

export const statusFromApi = (status: string): string => {
  const statusObject: { [x: string]: string } = {
    I: 'Inativo',
    P: 'Pendente',
    A: 'Ativo',
    N: 'Negado',
    E: 'Pré-Cadastro',
    EA: 'Em Análise',
    NN: 'Bloqueado',
  }

  return statusObject[status] || ''
}

export const previewPatientsFromApi = (
  data: PreviewPatientAnalyticFromApi,
): PatientAnalyticPreviewState => {
  return {
    patients: data.dados.map((patient, index) => ({
      id: String(index + 1),
      beneficiaryType: patient.titulares.length ? 'Dependente' : 'Titular',
      contractNumber: formatCpf(patient.cpf),
      name: patient.nome,
      cpf: formatCpf(patient.cpf),
      birthDate: new Date(patient.dataNascimento).toLocaleDateString('pt-br'),
      email: patient.email,
      gender: patient.sexo === 'M' ? 'Masculino' : 'Feminino',
      plan: patient.plano.nome,
      table: patient.tabelaPaciente?.nome,
      phone: formatPhone(patient.telefone),
      address: patient.logradouro,
      number: patient.numero,
      complement: patient.complemento,
      district: patient.bairro,
      city: patient.cidade,
      uf: patient.uf,
      cep: patient.cep,
      status: statusFromApi(patient.status),
      registerDate: formatDate(patient.usuario?.dataCadastro),
      exclusionDate: formatDate(patient.dataInativacao),
      validationDate: formatDate(patient.dataValidacao),
    })),
    total: data.total,
  }
}
