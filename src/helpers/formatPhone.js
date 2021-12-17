export const formatPhone = (phone) => {
  if (typeof phone === 'string') {
    return `(${phone.slice(0, 2)}) ${phone.slice(2, 6)}-${phone.slice(6, 12)}`
  }
  return ''
}
