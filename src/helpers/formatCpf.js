export const formatCpf = (value) => {
  if ((!value && typeof value !== 'string') || value.length < 11) return
  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}
