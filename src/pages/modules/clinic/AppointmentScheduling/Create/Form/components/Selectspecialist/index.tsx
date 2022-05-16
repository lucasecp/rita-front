import apiAdmin from '@/services/apiAdmin'
import React, { useEffect, useState } from 'react'
import { Select } from '@/components/Form/Select'
import { UseLoadingInput } from '@/hooks/useLoadingInput'

interface SpecialistsProps {
  specialist: string | number
  setSpecialist: React.Dispatch<React.SetStateAction<string>>
  setSpecialistName: React.Dispatch<React.SetStateAction<string>>
  [x: string]: any
}

export const SelectSpecialists: React.FC<SpecialistsProps> = ({
  setSpecialist,
  specialist,
  setSpecialistName,
  ...rest
}) => {
  const [specialtysOptions, setSpecialtysOptions] = useState([])

  const { LoadingInput, LoadingMessage } = UseLoadingInput()

  interface dataFromApi {
    medicos: {
      idMedico: number
      nome: string
    }[]
  }

  const mapSpecialistsOfClinic = (data: dataFromApi) => {
    return data?.medicos?.map((doctor) => ({
      value: doctor.idMedico,
      label: doctor.nome,
    }))
  }

  useEffect(() => {
    const getSpecialists = async () => {
      try {
        LoadingInput.turnOn()
        const { data } = await apiAdmin.get('/clinica/59/medico')

        setSpecialtysOptions(mapSpecialistsOfClinic(data))
      } catch (error) {
      } finally {
        LoadingInput.turnOff()
      }
    }

    getSpecialists()
  }, [])

  useEffect(() => {
    if (specialist) {
      const name = specialtysOptions.find(
        (spec) => spec.value === Number(specialist),
      ).label
      setSpecialistName(name)
    }
  }, [specialist])

  return (
    <Select
      label="Especialista:"
      labelDefaultOption={LoadingMessage}
      value={specialist}
      setValue={setSpecialist}
      options={specialtysOptions}
      {...rest}
    />
  )
}