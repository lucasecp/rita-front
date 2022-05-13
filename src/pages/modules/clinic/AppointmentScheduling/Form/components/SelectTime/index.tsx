import apiAdmin from '@/services/apiAdmin'
import React, { useEffect, useState } from 'react'
import { Select } from '@/components/Form/Select'
import { UseLoadingInput } from '@/hooks/useLoadingInput'
import { parse } from 'date-fns'

interface SelectTimeProps {
  idDoctor: string | number
  setTime: React.Dispatch<React.SetStateAction<string>>
  time: string
  date: string
}

export const SelectTime: React.FC<SelectTimeProps> = ({
  setTime,
  idDoctor,
  time,
  date,
}) => {
  const [specialtysOptions, setSpecialtysOptions] = useState([])
  const { LoadingInput, LoadingMessage } = UseLoadingInput()

  interface dataFromApi {
    horaInicio: string
    horaFim: string
    diaSemana: number
  }
  const [data, setData] = useState<dataFromApi[]>([])

  const getScheduleChosen = (data: dataFromApi[]) => {
    const dateChosen = parse(date, 'dd/MM/yyyy', new Date()).getDay() + 1
    return data.filter((val) => val.diaSemana === dateChosen)
  }

  const formatedDate = (value: string) => {
    if (!value) {
      return ''
    }
    const hours = Number(value.slice(0, 2))
    const minutes = Number(value.slice(3, 5))
    return new Date().setHours(hours, minutes)
  }

  const getSmallerTimeOfSchedule = (data: dataFromApi[]) => {
    const result = data.reduce((ac, val, index, array): string => {
      if (index === 0) {
        ac = val.horaInicio
      }
      const current = formatedDate(val.horaInicio)
      const previous = formatedDate(array[index - 1]?.horaInicio)

      if (previous && current < previous) {
        ac = val.horaInicio
        return ac
      }
      return ac
    }, '')
    return result
  }

  const getBiggestTimeOfSchedule = (data: dataFromApi[]) => {
    const result = data.reduce((ac, val, index, array): string => {
      if (index === 0) {
        ac = val.horaFim
      }

      const current = formatedDate(val.horaFim)
      const next = formatedDate(array[index - 1]?.horaFim)

      if (next && current > next) {
        ac = val.horaFim
        return ac
      }
      return ac
    }, '')
    return result
  }

  const mapSpecialistsOfClinic = (data: dataFromApi[]) => {
    const timesInDay = getScheduleChosen(data)

    if (!timesInDay.length) {
      return
    }

    const timeList = []

    const start = getSmallerTimeOfSchedule(timesInDay)
    const endDate = getBiggestTimeOfSchedule(timesInDay)

    const initialDateNum = start.slice(0, 5).replace(':', '.')
    const endDateNum = endDate.slice(0, 5).replace(':', '.')

    const amountTimes = Math.floor(Number(endDateNum) - Number(initialDateNum))

    for (let i = 0; i < amountTimes; i++) {
      const calcStart =
        String(Number(initialDateNum.slice(0, 2)) + i) +
        initialDateNum.slice(2, 5)

      const calEnd =
        String(Number(initialDateNum.slice(0, 2)) + i + 1) +
        initialDateNum.slice(2, 5)

      const startResult = calcStart.replace('.', ':')
      const endResult = calEnd.replace('.', ':')

      const setTwoDigits = (value: string) => '0' + value
      const onlyOneDigit = (value: string) => value.split(':')[0].length === 1

      let text = `${
        onlyOneDigit(startResult) ? setTwoDigits(startResult) : startResult
      } - ${onlyOneDigit(endResult) ? setTwoDigits(endResult) : endResult}`

      // no último horário renderizar até o fim
      if (amountTimes === i + 1) {
        text = `${startResult} - ${String(
          Number(calcStart.replace(':', '.')) + 1,
        ).slice(0, 2)}:00`
      }

      timeList.push({ id: text, label: text })
    }
    return timeList
  }

  useEffect(() => {
    const getSpecialists = async () => {
      try {
        LoadingInput.turnOn()
        const { data } = await apiAdmin.get(
          `/clinica/59/medico/${idDoctor}/agenda`,
        )

        setData(data)
      } catch (error) {
      } finally {
        LoadingInput.turnOff()
      }
    }

    getSpecialists()
  }, [])

  useEffect(() => {
    setSpecialtysOptions(mapSpecialistsOfClinic(data))
  }, [date])

  return (
    <Select
      label="Horário de agendamento:"
      labelDefaultOption={LoadingMessage}
      value={time}
      setValue={setTime}
      options={specialtysOptions}
    />
  )
}
