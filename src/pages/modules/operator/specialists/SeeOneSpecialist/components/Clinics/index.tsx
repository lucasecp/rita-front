import CustomMultiSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import apiAdmin from '@/services/apiAdmin'
import React, { useEffect, useState } from 'react'
import { mapClinics } from '../../adapters/mapClinic'
import { ErrorsI } from '../../Types'

import { Container } from './styles'

interface ClinicsProps {
  specialistClinic?: MultiSelectOption[]
  setSpecialistClinic: (value: any) => void
  errors: ErrorsI
  setErrors: (error: any) => any
}

export const Clinics: React.FC<ClinicsProps> = ({
  specialistClinic,
  setSpecialistClinic,
  errors,
  setErrors,
}) => {
  const [clinics, setClinics] = useState<MultiSelectOption[]>([])

  const [clinicOptions, setClinicOptions] = useState<MultiSelectOption[]>([])

  useEffect(() => {
    const getClinics = async () => {
      try {
        const { data } = await apiAdmin.get('/clinica')
        const dataMapped = mapClinics(data?.clinicas)

        if (!dataMapped.length) {
          return setClinicOptions([])
        }

        setClinicOptions(dataMapped)
      } catch ({ response }) {}
    }

    getClinics()
  }, [])

  useEffect(() => {
    setClinics(specialistClinic || [])
  }, [specialistClinic])

  useEffect(() => {
    setSpecialistClinic({
      clinics,
    })
    setErrors((error: ErrorsI) => ({ ...error, clinics: '' }))
  }, [clinics])

  const onChangingSelect = (values: MultiSelectOption[]) => {
    const hasAllOption = values.some((val) => val.id === 'All')

    if (hasAllOption) {
      return setClinics(clinicOptions)
    }
    return setClinics(values)
  }

  return (
    <Container>
      <h1>Clínicas</h1>
      <section>
        <CustomMultiSelect
          value={clinics}
          setValue={setClinics}
          variation="secondary"
          options={clinicOptions}
          hasError={!!errors.clinics}
          messageError={errors?.clinics}
          name="clinics"
          // onSelect={onChangingSelect}
          // onRemove={onChangingSelect}
        />
      </section>
    </Container>
  )
}
