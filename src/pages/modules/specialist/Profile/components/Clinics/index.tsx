import CustomMultiSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import apiAdmin from '@/services/apiAdmin'
import React, { useEffect, useState } from 'react'

import { mapClinics } from '../../adapters/mapClinic'
import { ErrorsI } from '../../Types'
import { Container } from './styles'

interface SpecialistClinicsProps {
  specialistClinic?: MultiSelectOption[]
  setSpecialistClinic: (value: any) => void
  initialData?: MultiSelectOption[]
  isEditing: boolean
  errors: ErrorsI
  setErrors: (error: any) => any
  formWasSubmited: boolean
}

export const Clinics: React.FC<SpecialistClinicsProps> = ({
  specialistClinic,
  setSpecialistClinic,
  isEditing,
  initialData,
  errors,
  setErrors,
  formWasSubmited
}) => {
  const [clinic, setClinic] = useState<MultiSelectOption[]>([])

  const [clinicOptions, setClinicOptions] = useState<MultiSelectOption[]>([])

  useEffect(() => {
    const getSpecialtys = async () => {
      try {
        const { data } = await apiAdmin.get('/clinica')
        const dataMapped = mapClinics(data?.clinicas)

        if (!dataMapped.length) {
          return setClinicOptions([])
        }

        setClinicOptions(() => {
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
    setClinic(specialistClinic || [])
  }, [specialistClinic])

  useEffect(() => {
    setSpecialistClinic({
      clinic,
    })
  }, [clinic, errors])

  useEffect(() => {
    if (!isEditing && !formWasSubmited) {
      setClinic(initialData || [])
      setErrors({})
    }
  }, [isEditing, initialData])

  const onChangingSelect = (values: MultiSelectOption[]) => {
    const hasAllOption = values.some((val) => val.id === 'All')

    if (hasAllOption) {
      return setClinic(clinicOptions)
    }
    return setClinic(values)
  }

  return (
    <Container>
      <h1>Clínicas</h1>
      <section>
        <CustomMultiSelect
          value={clinic}
          setValue={setClinic}
          variation="secondary"
          options={clinicOptions}
          disabled={!isEditing}
          hasError={!!errors.clinics}
          messageError={errors?.clinics}
          name="clinics"
          onSelect={onChangingSelect}
          onRemove={onChangingSelect}
        />
      </section>
    </Container>
  )
}
