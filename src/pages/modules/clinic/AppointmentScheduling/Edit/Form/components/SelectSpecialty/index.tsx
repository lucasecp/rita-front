import React, { useEffect, useState } from 'react'
import { Select } from '@/components/Form/Select'
import apiAdmin from '@/services/apiAdmin'
import { UseLoadingInput } from '@/hooks/useLoadingInput'
import { useAuth } from '@/hooks/login';

interface SpecialtysProps {
  specialty: string | number
  setSpecialty: React.Dispatch<React.SetStateAction<string>>
  idDoctor: number | string
  [x: string]: any
}

export const SelectSpecialty: React.FC<SpecialtysProps> = ({
  setSpecialty,
  specialty,
  idDoctor,
  ...rest
}) => {
  const { user } = useAuth()
  const [specialtysOptions, setSpecialtysOptions] = useState([])

  const { LoadingInput, LoadingMessage } = UseLoadingInput()

  interface dataFromApi {
    clinica: {
      idMedico: number
      nome: string
      especialidades: {
        idEspecialidade: number
        descricao: string
      }[]
    }
  }

  const mapSpecialtyOfClinic = (data: dataFromApi) => {
    return data?.clinica?.especialidades?.map((specialty) => ({
      value: specialty.idEspecialidade,
      label: specialty.descricao,
    }))
  }

  useEffect(() => {
    if (!idDoctor) {
      return
    }

    const getSpecialyts = async () => {
      try {
        LoadingInput.turnOn()
        const { data } = await apiAdmin.get(
          `/medico/${idDoctor}/clinica/${user.idClinica}/especialidade`,
        )
        const dataMapped = mapSpecialtyOfClinic(data)

        const hasCurrentSpecialty = dataMapped.some(
          (spec) => spec.value === specialty,
        )

        if (!hasCurrentSpecialty) {
          setSpecialty('')
        }

        setSpecialtysOptions(dataMapped)
      } catch (error) {
      } finally {
        LoadingInput.turnOff()
      }
    }

    getSpecialyts()
  }, [idDoctor])

  return (
    <Select
      label="Especialidade:"
      labelDefaultOption={LoadingMessage}
      value={specialty}
      setValue={setSpecialty}
      options={specialtysOptions}
      disabled={!idDoctor}
      {...rest}
    />
  )
}
