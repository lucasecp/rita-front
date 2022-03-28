export const formatPrice = (price) => {
  if (!price && price !== 0) {
    return ''
  }

  // const convertedPriceToNumber = Number(price.replace(/\D/g, ''))

  const priceFormatted = price.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  })

  return priceFormatted
}

export default formatPrice
