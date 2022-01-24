import CustomMultiSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import apiPatient from '@/services/apiPatient'
import React, { useEffect, useState } from 'react'
import { mapSpecialtys } from '../../adapters/mapSpecialtys'

import { Container } from './styles'
interface ClinicSpecialtysProps {
  clinicSpecialtys: MultiSelectOption[]
  setClinicSpecialtys: (value: any) => void
  initialData: MultiSelectOption[]
  cancelEdit: boolean
  isEditing: boolean
}

export const ClinicSpecialty: React.FC<ClinicSpecialtysProps> = ({
  clinicSpecialtys,
  setClinicSpecialtys,
  isEditing,
  initialData,
  cancelEdit,
}) => {
  const [specialtys, setSpecialtys] = useState<MultiSelectOption[]>(
    clinicSpecialtys || [],
  )
  const [errors, setErrors] = useState({})
  const [specialtysOptions, setSpecialtysOptions] = useState<
    MultiSelectOption[]
  >([])

  useEffect(() => {
    const getSpecialtys = async () => {
      try {
        const { data } = await apiPatient.get('/especialidade')
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
      } catch ({ response }) {
      } finally {
      }
    }

    getSpecialtys()
  }, [])

  useEffect(() => {
    setSpecialtys(clinicSpecialtys || '')
  }, [clinicSpecialtys])

  useEffect(() => {
    setClinicSpecialtys({
      specialtys,
      hasError: Object.values(errors).some((value) => value !== ''),
    })
  }, [specialtys, errors])

  useEffect(() => {
    if (cancelEdit) {
      setSpecialtys(initialData || '')
      setErrors({})
    }
  }, [cancelEdit, initialData])

  const onChangeSelect = (values: MultiSelectOption[]) => {
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
          onSelect={onChangeSelect}
          onRemove={onChangeSelect}
        />
      </section>
    </Container>
  )
}
