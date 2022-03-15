import { differenceInDays } from 'date-fns'

export default (date1, date2) => {
  return differenceInDays(new Date(date2), new Date(date1)) + 1
}
