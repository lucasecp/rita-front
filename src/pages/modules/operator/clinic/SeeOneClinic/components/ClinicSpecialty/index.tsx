import CustomMultiSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import React, { useEffect, useState } from 'react'

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
  initialData,
  cancelEdit,
}) => {
  const [specialtys, setSpecialtys] = useState<MultiSelectOption[]>(
    clinicSpecialtys || [],
  )
  const [errors, setErrors] = useState({})

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

  return (
    <Container>
      <h1>Especialidades</h1>
      <section>
        <CustomMultiSelect
          disabled
          value={specialtys}
          setValue={setSpecialtys}
          variation="secondary"
          options={[]}
        />
      </section>
    </Container>
  )
}
