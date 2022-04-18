import { DaysI, ErrorsI } from '../../types/index'
import clearSpecialCaracter from '@/helpers/clearSpecialCharacters'
import { MultiSelectOption } from '@/components/Form/MultSelect/index'
import { useScheduleSpecialist } from '../../hooks'
import { useModal } from '@/hooks/useModal'

interface fields {
  startTime: string
  endTime: string
  specialtys: MultiSelectOption[]
  days: DaysI
}

export const useValidator = (
  setErrors: React.Dispatch<React.SetStateAction<ErrorsI>>,
): { hasError: (fields: fields) => boolean } => {
  const { schedule } = useScheduleSpecialist()

  const { showSimple } = useModal()

  const getMinutes = (time: string) => Number(time.slice(3, 5))

  const getHour = (time: string) => Number(time.slice(0, 2))

  const hasError = (fields: fields) => {
    setErrors({} as ErrorsI)
    let error = false

    const someDayWasSelected = Object.values(fields.days).some((day) => day)

    const startTimeCleared = clearSpecialCaracter(fields.startTime)

    const endTimeCleared = clearSpecialCaracter(fields.endTime)

    const daysChoosen = schedule.filter((schedule) => fields.days[schedule.day])

    const startChosen = new Date().setHours(
      getHour(fields.startTime),
      getMinutes(fields.startTime),
    )

    const endChosen = new Date().setHours(
      getHour(fields.endTime),
      getMinutes(fields.endTime),
    )

    const hasNoScheduleHours = daysChoosen.filter((day) => {
      const startExisting = new Date().setHours(
        getHour(day.start),
        getMinutes(day.start),
      )

      const endExisting = new Date().setHours(
        getHour(day.end),
        getMinutes(day.end),
      )

      return (
        (startChosen <= endExisting &&
          startChosen >= startExisting &&
          endChosen >= endExisting) ||
        (endChosen <= endExisting &&
          endChosen >= startExisting &&
          startChosen <= startExisting) ||
        (endChosen <= endExisting &&
          endChosen >= startExisting &&
          startChosen <= startExisting) ||
        (startChosen >= startExisting && endChosen <= endExisting) ||
        (startChosen <= startExisting && endChosen >= endExisting)
      )
    })

    if (hasNoScheduleHours.length > 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        startTime: 'Revise esse campo.',
        endTime: 'Revise esse campo.',
      }))

      showSimple.error('Já existe um compromisso com o horário informado.')

      error = true
    }

    if (startChosen > endChosen) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        startTime: 'Revise esse campo.',
        endTime: 'Revise esse campo.',
      }))

      showSimple.error('Hora início não pode ser maior do que a Hora Fim')
      error = true
    }

    if (fields.specialtys.length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        specialtys: 'Especialidade Obrigatória.',
      }))

      error = true
    }
    if (!someDayWasSelected) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        days: 'Seleção do dia é obrigatória.',
      }))

      error = true
    }
    if (!startTimeCleared) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        startTime: 'Campo Obrigatório.',
      }))

      error = true
    }

    if (!endTimeCleared) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        endTime: 'Campo Obrigatório.',
      }))

      error = true
    }
    return error
  }
  return { hasError }
}
