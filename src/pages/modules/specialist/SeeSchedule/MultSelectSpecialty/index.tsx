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
  const [isLoading, setIsLoading] = useState(true)

  const mapSpecialtys = (arrayDoctor: any[]) => {
    if (!arrayDoctor) return []
    return arrayDoctor.map((obj) => ({
      id: obj.idEspecialidade,
      name: obj.descricao,
    }))
  }

  useEffect(() => {
    if(idDoctor && idClinic){
      getSpecialtys()
    }
  }, [idDoctor, idClinic])

  const getSpecialtys = async () => {
    try {
      apiAdmin.get(`/medico/${idDoctor}/clinica/${idClinic}/especialidade`).then(response => {
        const dataMapped = mapSpecialtys(response.data?.clinica?.especialidades)
        if (!dataMapped.length) {
          setIsLoading(false)
          return setSpecialtysOptions([])
        }
        setSpecialtysOptions(dataMapped)
        setIsLoading(false)
        if(dataMapped.length === 1){
          setSpecialtys(dataMapped)
        }
      })
    } catch (error) {} finally {
      setIsLoading(true)
    }

  }


  return (
    <Container>
      {!label && <h1>Especialidades</h1>}
      <section>
        <MultSelect
          value={specialtysOptions.length === 1 ? specialtysOptions : specialtys}
          setValue={setSpecialtys}
          color={color}
          options={isLoading ? [{ id: '', name: 'Carregando...' }] : specialtysOptions}
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
