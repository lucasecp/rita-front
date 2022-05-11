import React, { useEffect, useState } from 'react'
import { Select } from '@/components/Form/Select'
import apiAdmin from '@/services/apiAdmin'
import { UseLoadingInput } from '../../../../../../../hooks/useLoadingInput'

interface SpecialtysProps {
  specialty: string | number
  setSpecialty: React.Dispatch<React.SetStateAction<string>>
  idDoctor: number | string
}

export const SelectSpecialty: React.FC<SpecialtysProps> = ({
  setSpecialty,
  specialty,
  idDoctor,
  ...rest
}) => {
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
      id: specialty.idEspecialidade,
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
          `/medico/${idDoctor}/clinica/59/especialidade`,
        )

        setSpecialtysOptions(mapSpecialtyOfClinic(data))
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
