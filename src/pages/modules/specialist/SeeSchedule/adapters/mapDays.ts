import { daysWeek } from '../contants/days'

type DaysType =
  | 'monday'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thrusday'
  | 'friday'
  | 'sartuday'

export const mapDays = (day: number): DaysType => {
  const daysFormated = {
    1: daysWeek.SUNDAY,
    2: daysWeek.MONDAY,
    3: daysWeek.TUESDAY,
    4: daysWeek.WEDNESDAY,
    5: daysWeek.THRUSDAY,
    6: daysWeek.FRIDAY,
    7: daysWeek.SATURDAY,
  }

  return daysFormated[day] || ''
}

export const mapDaysToApi = (day: DaysType): number => {
  const daysFormated = {
    [daysWeek.SUNDAY]: 1,
    [daysWeek.MONDAY]: 2,
    [daysWeek.TUESDAY]: 3,
    [daysWeek.WEDNESDAY]: 4,
    [daysWeek.THRUSDAY]: 5,
    [daysWeek.FRIDAY]: 6,
    [daysWeek.SATURDAY]: 7,
  }

  return daysFormated[day] || null
}

export const mapDaysPortugues = (day: DaysType): string => {
  const daysFormated = {
    [daysWeek.SUNDAY]: 'Domingo',
    [daysWeek.MONDAY]: 'Segunda-Feira',
    [daysWeek.TUESDAY]: 'Terça-Feira',
    [daysWeek.WEDNESDAY]: 'Quarta-Feira',
    [daysWeek.THRUSDAY]: 'Quinta-Feira',
    [daysWeek.FRIDAY]: 'Sexta-Feira',
    [daysWeek.SATURDAY]: 'Sábado',
  }

  return daysFormated[day]
}
