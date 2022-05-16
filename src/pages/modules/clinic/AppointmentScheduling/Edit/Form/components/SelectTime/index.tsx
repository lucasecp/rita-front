import apiAdmin from '@/services/apiAdmin'
import React, { useEffect, useState } from 'react'
import { Select } from '@/components/Form/Select'
import { UseLoadingInput } from '@/hooks/useLoadingInput'
import { parse } from 'date-fns'
import { useAuth } from '@/hooks/login';

interface SelectTimeProps {
  idDoctor: string | number
  setTime: React.Dispatch<React.SetStateAction<string>>
  time: string
  date: string
  [x: string]: any
}

export const SelectTime: React.FC<SelectTimeProps> = ({
  setTime,
  idDoctor,
  time,
  date,
  ...rest
}) => {
  const [timeOptions, setTimeOptions] = useState([])
  const { LoadingInput, LoadingMessage } = UseLoadingInput()
  const { user } = useAuth()

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

  const getTimes = (data: dataFromApi[]) => {
    return data.map((val) => ({
      start: val.horaInicio.slice(0, 5),
      end: val.horaFim.slice(0, 5),
    }))
  }

  const mapTime = (data: dataFromApi[]) => {
    const timesInDay = getScheduleChosen(data)

    if (!timesInDay.length) {
      return
    }

    const timeList = []

    const times = getTimes(timesInDay)

    for (let i = 0; i < times.length; i++) {
      const text = `${times[i].start} - ${times[i].end}`

      timeList.push({ label: `${text} - ${date}`, value: text })
    }
    return timeList
  }

  useEffect(() => {
    if (date.length !== 10) {
      return
    }

    const getTimes = async () => {
      try {
        LoadingInput.turnOn()
        const { data } = await apiAdmin.get(
          `/clinica/${user.idClinica}/medico/${idDoctor}/agenda`,
        )
        const dataMapped = mapTime(data)

        const hasTimeInOptions = dataMapped?.some((spec) => spec.value === time)

        if (!hasTimeInOptions) {
          setTime('')
        }

        setTimeOptions(dataMapped)

        setData(data)
      } catch (error) {
        console.log(error)
      } finally {
        LoadingInput.turnOff()
      }
    }

    getTimes()
  }, [date, idDoctor])

  return (
    <Select
      label="Horário de agendamento:"
      labelDefaultOption={LoadingMessage}
      value={time}
      setValue={setTime}
      options={timeOptions}
      {...rest}
    />
  )
}
