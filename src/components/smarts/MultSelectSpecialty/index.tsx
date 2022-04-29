import CustomMultiSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import apiAdmin from '@/services/apiAdmin'
import React, { useEffect, useState, SetStateAction } from 'react'

import { Container } from './styles'

interface SpecialtysProps {
  specialtys: MultiSelectOption[]
  setSpecialtys: React.Dispatch<SetStateAction<MultiSelectOption[]>>
  errors: any
  color?: string
  label?: string
  [x: string]: any
}

export const MultSelectSpecialty: React.FC<SpecialtysProps> = ({
  specialtys,
  setSpecialtys,
  errors,
  color,
  label,
  ...rest
}) => {
  const [specialtysOptions, setSpecialtysOptions] = useState<
    MultiSelectOption[]
  >([])

  const mapSpecialtys = (
    array: {
      idEspecialidade: string
      descricao: string
      requerInscricao: string
    }[],
  ) => {
    if (!array) return []

    return array
      .map((obj) => ({
        id: obj.idEspecialidade,
        name: obj.descricao,
        rqeRequired: obj.requerInscricao,
      }))
      .filter((specialty) => specialty.id && specialty.name)
  }

  useEffect(() => {
    const getSpecialtys = async () => {
      try {
        const { data } = await apiAdmin.get('/especialidade')
        const dataMapped = mapSpecialtys(data?.especialidade)

        if (!dataMapped.length) {
          return setSpecialtysOptions([])
        }

        setSpecialtysOptions(dataMapped)
      } catch ({ response }) {}
    }

    getSpecialtys()
  }, [])

  return (
    <Container>
      {!label && <h1>Especialidades</h1>}
      <section>
        <CustomMultiSelect
          value={specialtys}
          setValue={setSpecialtys}
          color={color}
          options={specialtysOptions}
          hasError={!!errors?.specialtys}
          messageError={errors?.specialtys}
          name="specialtys"
          label={label}
          {...rest}
        />
      </section>
    </Container>
  )
}
