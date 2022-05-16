import apiAdmin from '@/services/apiAdmin'
import React, { useEffect, useState } from 'react'
import { Select } from '@/components/Form/Select'
import { UseLoadingInput } from '@/hooks/useLoadingInput'
import { useAuth } from '@/hooks/login';

interface SpecialistsProps {
  specialist: string | number
  setSpecialist: React.Dispatch<React.SetStateAction<string>>
}

export const SelectSpecialists: React.FC<SpecialistsProps> = ({
  setSpecialist,
  specialist,
}) => {
  const [specialtysOptions, setSpecialtysOptions] = useState([])
  const { LoadingInput, LoadingMessage } = UseLoadingInput()
  const { user } = useAuth()

  interface dataFromApi {
    medicos: {
      idMedico: number
      nome: string
    }[]
  }

  const mapSpecialistsOfClinic = (data: dataFromApi) => {
    return data?.medicos?.map((doctor) => ({
      id: doctor.idMedico,
      label: doctor.nome,
    }))
  }

  useEffect(() => {
    const getSpecialists = async () => {
      try {
        LoadingInput.turnOn()
        const { data } = await apiAdmin.get(`/clinica/${user.idClinica}/medico`)

        setSpecialtysOptions(mapSpecialistsOfClinic(data))
      } catch (error) {
      } finally {
        LoadingInput.turnOff()
      }
    }

    getSpecialists()
  }, [])

  return (
    <Select
      label="Especialista:"
      labelDefaultOption={LoadingMessage}
      value={specialist}
      setValue={setSpecialist}
      options={specialtysOptions}
    />
  )
}
