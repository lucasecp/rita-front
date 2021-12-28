export default (status) => {
  if (status === 'N') return 'Negado'
  if (status === 'P') return 'Pendente'
  if (status === 'A') return 'Aprovado'
  if (status === 'EA') return 'Em análise'
}
