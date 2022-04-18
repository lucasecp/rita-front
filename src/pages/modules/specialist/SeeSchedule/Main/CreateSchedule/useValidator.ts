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

export const useValidator = (setErrors: React.Dispatch<React.SetStateAction<ErrorsI>>): { hasError: (fields: fields) => boolean } => {
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

    const hasNoScheduleHours = daysChoosen.filter((day) => {
      const startChoosen = new Date().setHours(
        getHour(fields.startTime),
        getMinutes(fields.startTime),
      )

      const endChoose = new Date().setHours(
        getHour(fields.endTime),
        getMinutes(fields.endTime),
      )

      const startExisting = new Date().setHours(
        getHour(day.start),
        getMinutes(day.start),
      )

      const endExisting = new Date().setHours(
        getHour(day.end),
        getMinutes(day.end),
      )

      return (
        (startChoosen <= endExisting &&
          startChoosen >= startExisting &&
          endChoose >= endExisting) ||
        (endChoose <= endExisting &&
          endChoose >= startExisting &&
          startChoosen <= startExisting) ||
        (endChoose <= endExisting &&
          endChoose >= startExisting &&
          startChoosen <= startExisting) ||
        (startChoosen >= startExisting && endChoose <= endExisting) ||
        (startChoosen <= startExisting && endChoose >= endExisting)
      )
    })

    if (hasNoScheduleHours.length > 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        startTime: 'Revise esse campo.',
        endTime: 'Revise esse campo.',
      }))

      showSimple.error('Existe um horário de atendimento marcado neste dia e horário. Remova o horário de atendimento já existente para adicionar o novo.')

      error = true
    }
    if (!fields.specialtys || fields.specialtys.length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        specialtys: 'Especialidade Obrigatória.',
      }))
      error = true
    }
    if (fields.specialtys && fields.specialtys.length > 1) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        specialtys: 'Somente 1 especialidade por horário de trabalho.',
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

    if(fields.startTime){
      const startTime = getHour(fields.startTime)
      if(startTime > 23){
        setErrors((prevErrors) => ({
          ...prevErrors,
          startTime: 'A hora não pode ser maior do que 23:00',
        }))

        error = true
      }
    }

    if(fields.endTime){
      const endTime = getHour(fields.endTime)
      if(endTime > 23){
        setErrors((prevErrors) => ({
          ...prevErrors,
          endTime: 'A hora não pode ser maior do que 23:00',
        }))

        error = true
      }
    }

    if(fields.endTime && fields.startTime){
      const startTime = getHour(fields.startTime)
      const endTime = getHour(fields.endTime)
      if(startTime > endTime){
        setErrors((prevErrors) => ({
          ...prevErrors,
          startTime: 'A hora inicial não pode ser maior do que a hora final.',
        }))

        error = true
      }
    }

    return error
  }
  return { hasError }
}
