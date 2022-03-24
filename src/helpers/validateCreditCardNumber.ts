// @ts-ignore
import * as creditCardJS from 'creditcard.js'
import clearOnlyNumbers from '@/helpers/clear/onlyNumbers'

export default function (value: string): boolean {
  const numberFormatted = clearOnlyNumbers(value)

  return creditCardJS.isValid(numberFormatted)
}
