export const showStatus = (status) => {
  if (status === 'I') return 'Inativo'
  if (status === 'P') return 'Em digitação'
  if (status === 'A') return 'Ativo'
  if (status === 'S') return 'Suspenso'
  return ''
}
