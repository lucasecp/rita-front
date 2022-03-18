import { formatPrice } from '@/helpers/formatPrice'
import { formatCpf } from '@/helpers/formatCpf'
import { PreviewBillingsState } from './../../../index'
import { formatPhone } from '@/helpers/formatPhone'

interface PreviewBillingsFromApi {
  dados: {
    idPaciente: number
    nome: string
    cpf: string
    dataNascimento: string
    status: string
    sexo: string
    telefone: string
    plano: {
      idPlano: number
      nome: string
      mensalidade: number
    }
    titulares: []
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
    NN: 'Bloqueado',
  }

  return statusObject[status] || ''
}

export const previewBillingsFromApi = (
  data: PreviewBillingsFromApi,
): PreviewBillingsState => {
  return {
    patients: data.dados.map((patient, index) => ({
      id: String(index + 1),
      contractNumber: formatCpf(patient.cpf),
      beneficiaryType: patient.titulares.length ? 'Dependente' : 'Titular',
      name: patient.nome,
      cpf: formatCpf(patient.cpf),
      birthDate: new Date(patient.dataNascimento).toLocaleDateString('pt-br'),
      gender: patient.sexo === 'M' ? 'Masculino' : 'Feminino',
      plan: patient.plano.nome,
      amountPlan: formatPrice(patient.plano.mensalidade),

      phone: formatPhone(patient.telefone),
      status: statusFromApi(patient.status),
    })),
    total: data.total,
  }
}
