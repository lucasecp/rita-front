// @ts-ignore
import * as creditCardJS from 'creditcard.js'
import clearOnlyNumbers from '@/helpers/clear/onlyNumbers'

export default function (code: string, number: string) {
  const numberFormatted = clearOnlyNumbers(number)

  return (
    Boolean(code) &&
    Boolean(numberFormatted) &&
    creditCardJS.isSecurityCodeValid(numberFormatted, code)
  )
}
