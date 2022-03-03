import CustomMultiSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import apiAdmin from '@/services/apiAdmin'
import React, { useEffect, useState } from 'react'

import { mapSpecialtys } from '../../adapters/mapSpecialtys'
import { ErrorsI } from '../../Types'
import { Container } from './styles'

interface ClinicSpecialtysProps {
  specialistSpecialtys?: MultiSelectOption[]
  setSpecialistSpecialtys: (value: any) => void
  initialData?: MultiSelectOption[]
  isEditing: boolean
  errors: ErrorsI
  setErrors: (error: any) => any
  formWasSubmited: boolean
}

export const Specialtys: React.FC<ClinicSpecialtysProps> = ({
  specialistSpecialtys,
  setSpecialistSpecialtys,
  isEditing,
  initialData,
  errors,
  setErrors,
  formWasSubmited,
}) => {
  const [specialtys, setSpecialtys] = useState<MultiSelectOption[]>([])

  const [specialtysOptions, setSpecialtysOptions] = useState<
    MultiSelectOption[]
  >([])

  useEffect(() => {
    const getSpecialtys = async () => {
      try {
        const { data } = await apiAdmin.get('/especialidade')
        const dataMapped = mapSpecialtys(data?.especialidade)

        if (!dataMapped.length) {
          return setSpecialtysOptions([])
        }

        setSpecialtysOptions(() => {
          if (dataMapped.length === 1) {
            return dataMapped
          }
          return [{ name: 'Todas', id: 'All' }, ...dataMapped]
        })
      } catch ({ response }) {}
    }

    getSpecialtys()
  }, [])

  useEffect(() => {
    setSpecialtys(specialistSpecialtys || [])
  }, [specialistSpecialtys])

  useEffect(() => {
    setSpecialistSpecialtys({
      specialtys,
    })
    setErrors((error: ErrorsI) => ({ ...error, specialtys: '' }))
  }, [specialtys])

  useEffect(() => {
    if (!formWasSubmited) {
      setSpecialtys(initialData || [])
      setErrors({})
    } else {
      setSpecialtys(specialtys || [])
    }
  }, [ formWasSubmited])

  const onChangingSelect = (values: MultiSelectOption[]) => {
    const hasAllOption = values.some((val) => val.id === 'All')

    if (hasAllOption) {
      return setSpecialtys(specialtysOptions)
    }
    return setSpecialtys(values)
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
          disabled={!isEditing}
          hasError={!!errors.specialtys}
          messageError={errors?.specialtys}
          name="specialtys"
          onSelect={onChangingSelect}
          onRemove={onChangingSelect}
        />
      </section>
    </Container>
  )
}
