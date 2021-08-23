export default  (type, data) => {
  if (type === 'email') {
    const emailArray = data.split('@')
    const firstTwoCaracteres = Array.from(emailArray[0]).splice(0, 2)
    const numHash = emailArray[0].slice(2)
    const hash = Array.from(numHash).map((el) => el.replace(el, '*'))
    const result = `${firstTwoCaracteres.join('')}${hash.join('')}@${
      emailArray[1]
    }`
    return result
  }
  if (type === 'celular') {
    const lastTwoCaracteres = data.slice(-2)
    const fistTwoCaracteres = data.slice(0, 2)
    const numHash = data.slice(2, -2)
    const hash = Array.from(numHash).map((el) => el.replace(el, '*'))
    const result = `${fistTwoCaracteres}${hash.join('')}${lastTwoCaracteres}`
    return result
  }
}