export const formatPrice = (price) => {
  if (!price) {
    return ''
  }

  const priceFormatted = `R$ ${price?.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  })}`

  return priceFormatted
}
