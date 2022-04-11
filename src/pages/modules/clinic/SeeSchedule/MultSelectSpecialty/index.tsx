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
  idClinic: number
  idDoctor: number
}

export const MultSelectSpecialty: React.FC<SpecialtysProps> = ({
  specialtys,
  setSpecialtys,
  errors,
  color,
  label,
  idClinic,
  idDoctor,
  ...rest
}) => {
  const [specialtysOptions, setSpecialtysOptions] = useState<
    MultiSelectOption[]
  >([])

  const mapSpecialtys = (arrayDoctor: any[], arrayClinic: any[]) => {
    if (!arrayDoctor && !arrayClinic) return []

    return arrayClinic
      .map((obj) => ({
        id: obj.idEspecialidade,
        name: obj.descricao,
        rqeRequired: obj.requerInscricao,
      }))
      .filter(
        (specialty) =>
          specialty.id &&
          specialty.name &&
          arrayDoctor.some((doc) => doc.descricao === specialty.name),
      )
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
