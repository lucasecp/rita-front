import CustomMultiSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import apiAdmin from '@/services/apiAdmin'
import React, { useEffect, useState, SetStateAction } from 'react'

import { Container } from './styles'
import { useModal } from '@/hooks/useModal'
import InsertRqeNumber from './messages/insertRqeNumber/index'

//Será mostrado uma modal caso a especialidade requerer inscrição

interface SpecialtysProps {
  specialtys: MultiSelectOption[]
  setSpecialtys: React.Dispatch<SetStateAction<MultiSelectOption[]>>
  errors: any
  setErrors: (error: any) => any
  [x: string]: any
}

export const MultSelectSpecialty: React.FC<SpecialtysProps> = ({
  specialtys,
  setSpecialtys,
  errors,
  setErrors,
  ...rest
}) => {
  const [specialtysOptions, setSpecialtysOptions] = useState<
    MultiSelectOption[]
  >([])

  const { showMessage } = useModal()

  const mapSpecialtys = (array: any[]) => {
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
  
  const onChange = (values: MultiSelectOption[], value?: MultiSelectOption) => {
    if (value?.rqeRequired) {
      return showMessage(InsertRqeNumber, {
        setSpecialtys,
        currentSpecialty: value,
      })
    }
    setSpecialtys(values)
  }

  return (
    <Container>
      <h1>Especialidades</h1>
      <section>
        <CustomMultiSelect
          value={specialtys}
          setValue={setSpecialtys}
          variation="secondary"
          options={specialtysOptions}
          hasError={!!errors?.specialtys}
          messageError={errors?.specialtys}
          name="specialtys"
          onSelect={(value: MultiSelectOption[], v?: MultiSelectOption) =>
            onChange(value, v)
          }
          {...rest}
        />
      </section>
    </Container>
  )
}
