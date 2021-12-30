import formatTextWithLimit from '@/helpers/formatTextWithLimit'

export const fromApi = (dataDependent: any[]) => {
  return dataDependent?.map((dep) => ({
    id: dep.idPaciente,
    name: formatTextWithLimit(dep.nome, 38),
    birthdate: dep.dataNascimento,
    cpf: dep.cpf,
    status: dep.status,
    isValidate: dep.validacaoUltrapassada,
    documentsOk: dep.cpfCadastrado,
  }))
}
