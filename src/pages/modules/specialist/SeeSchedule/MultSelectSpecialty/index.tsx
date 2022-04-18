import MultSelect, { MultiSelectOption } from '@/components/Form/MultSelect'
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
  const [specialtysOptions, setSpecialtysOptions] = useState<MultiSelectOption[]>([])

  const mapSpecialtys = (arrayDoctor: any[]) => {
    if (!arrayDoctor) return []
    return arrayDoctor.map((obj) => ({
      id: obj.idEspecialidade,
      name: obj.descricao,
    }))
  }

  useEffect(() => {
    getSpecialtys()
  }, [idDoctor, idClinic])

  const getSpecialtys = async () => {
    try {
      const { data } = await apiAdmin.get(
        `/medico/${idDoctor}/clinica/${idClinic}/especialidade`,
      )
      const dataMapped = mapSpecialtys(data?.clinica?.especialidades)
      if (!dataMapped.length) {
        return setSpecialtysOptions([])
      }
      setSpecialtysOptions(dataMapped)
    } catch (error) {}
  }


  return (
    <Container>
      {!label && <h1>Especialidades</h1>}
      <section>
        <MultSelect
          value={specialtys}
          setValue={setSpecialtys}
          color={color}
          options={specialtysOptions}
          hasError={!!errors.specialtys}
          messageError={errors.specialtys}
          name="specialtys"
          label={label}
          {...rest}
        />
      </section>
    </Container>
  )
}
