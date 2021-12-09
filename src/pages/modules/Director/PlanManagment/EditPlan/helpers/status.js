export const showStatus = (status) => {
  if (status === 'I') return 'Inativo'
  if (status === 'P') return 'Pendente'
  if (status === 'A') return 'Ativo'
  if (status === 'S') return 'Suspenso'
  return ''
}

export const statusOptions = [
  { value: 'P', label: 'Em Digitação' },
  { value: 'A', label: 'Ativo' },
  { value: 'I', label: 'Inativo' },
  { value: 'S', label: 'Suspenso' },
]

export const statusOptionsWithoutInTyping = [
  { value: 'A', label: 'Ativo' },
  { value: 'I', label: 'Inativo' },
  { value: 'S', label: 'Suspenso' },
]
