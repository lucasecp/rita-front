export const formatPrice = (price) => {
  if (!price) {
    return ''
  }

  const priceFormatted = price.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  })

  return priceFormatted
}
