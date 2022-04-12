import { Select, SelectOption } from '@/components/Form/Select'
import apiAdmin from '@/services/apiAdmin'
import React, { useEffect, useState, SetStateAction } from 'react'

import { Container } from './styles'

interface SpecialtysProps {
  specialtys: string
  setSpecialtys: React.Dispatch<SetStateAction<string>>
  errors: any
  color?: string
  label?: string
  [x: string]: any
  idClinic: number
  idDoctor: number
}

export const SelectSpecialty: React.FC<SpecialtysProps> = ({
  specialtys,
  setSpecialtys,
  errors,
  color,
  label,
  idClinic,
  idDoctor,
  ...rest
}) => {
  const [specialtysOptions, setSpecialtysOptions] = useState<SelectOption[]>([])

  const mapSpecialtys = (arrayDoctor: any[], arrayClinic: any[]) => {
    if (!arrayDoctor && !arrayClinic) return []

    return arrayClinic
      .map((obj) => ({
        id: obj.idEspecialidade,
        label: obj.descricao,
        value: obj.idEspecialidade,
      }))
  }

  useEffect(() => {
    const getSpecialtys = async () => {
      try {
        const { data } = await apiAdmin.get(
          `/clinica/${idClinic}/medico/${idDoctor}`,
        )
        const { data: dataClinic } = await apiAdmin.get(
          `clinica/minha-clinica/${idClinic}`,
        )

        const dataMapped = mapSpecialtys(
          data?.especialidades,
          dataClinic.especialidade,
        )

        if (!dataMapped.length) {
          return setSpecialtysOptions([])
        }

        setSpecialtysOptions(dataMapped)
      } catch ({ response }) {}
    }

    getSpecialtys()
  }, [idDoctor, idClinic])

  return (
    <Container>
      {!label && <h1>Especialidades</h1>}
      <section>
        <Select
          value={specialtys}
          setValue={setSpecialtys}
          color={color}
          options={specialtysOptions}
          hasError={!!errors?.specialtys}
          msgError={errors?.specialtys}
          name="specialtys"
          label={label}
          variation='secondary'
          {...rest}
        />
      </section>
    </Container>
  )
}
