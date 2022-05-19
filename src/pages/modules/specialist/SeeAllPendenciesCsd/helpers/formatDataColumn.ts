/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Helpers */
import formatDateAndHours from '@/helpers/formateDateAndHour'

export const formatDataColumn = (date: string) => {
  return formatDateAndHours(date, ' às ')
}
