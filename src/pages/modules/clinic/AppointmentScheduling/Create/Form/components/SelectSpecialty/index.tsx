import React, { useEffect, useState } from 'react'
import { Select } from '@/components/Form/Select'
import apiAdmin from '@/services/apiAdmin'
import { UseLoadingInput } from '@/hooks/useLoadingInput'

interface SpecialtysProps {
  specialty: string | number
  setSpecialty: React.Dispatch<React.SetStateAction<string>>
  idDoctor: number | string
  setSpecialtyName: React.Dispatch<React.SetStateAction<string>>
  [x: string]: any
}

export const SelectSpecialty: React.FC<SpecialtysProps> = ({
  setSpecialty,
  specialty,
  idDoctor,
  setSpecialtyName,
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
      value: specialty.idEspecialidade,
      label: specialty.descricao,
    }))
  }

  useEffect(() => {
    if (!idDoctor) {
      return
    }
    setSpecialty('')

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

  useEffect(() => {
    if (specialty) {
      const name = specialtysOptions.find(
        (spec) => spec.value === Number(specialty),
      ).label
      setSpecialtyName(name)
    }
  }, [specialty])

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
