import apiAdmin from '@/services/apiAdmin'
import React, { useEffect, useState } from 'react'
import { Select } from '@/components/Form/Select'
import { UseLoadingInput } from '@/hooks/useLoadingInput'

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

  const getScheduleChosen = (data: dataFromApi[]) => {
    const dateChosen = new Date(date).getDay()

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
      const current = formatedDate(ac)
      const previous = formatedDate(array[index - 1]?.horaInicio)

      if (previous && current > previous) {
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

      const current = formatedDate(ac)
      const next = formatedDate(array[index + 1]?.horaFim)

      if (next && current < next) {
        ac = val.horaFim
        return ac
      }
      return ac
    }, '')
    return result
  }

  const mapSpecialistsOfClinic = (data: dataFromApi[]) => {
    const timeList = []
    const timesInDay = getScheduleChosen(data)

    // quantas horas cada opção vai ter

    const start = getSmallerTimeOfSchedule(timesInDay)
    const endDate = getBiggestTimeOfSchedule(timesInDay)

    const initialDateNum = Number(start.slice(0, 5).replace(':', '.'))
    const endDateNum = Number(endDate.slice(0, 5).replace(':', '.'))

    const amountTimes = Math.floor(endDateNum - initialDateNum) 


    for (let i = 0; i < amountTimes; i++) {
      const calcStart = String(initialDateNum + i).replace('.', ':')
      const calEnd = String(Number(calcStart.replace(':', '.')) + 1).replace(
        '.',
        ':',
      )

      let text = `${calcStart} - ${calEnd}`

      if (amountTimes === i + 1) {
        text = `${calcStart} - ${String(
          Number(calcStart.replace(':', '.')) + 2,
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
        console.log(mapSpecialistsOfClinic(data))

        setSpecialtysOptions(mapSpecialistsOfClinic(data))
      } catch (error) {
      } finally {
        LoadingInput.turnOff()
      }
    }

    getSpecialists()
  }, [date])

  return (
    <Select
      label="Especialista:"
      labelDefaultOption={LoadingMessage}
      value={time}
      setValue={setTime}
      options={specialtysOptions}
    />
  )
}
