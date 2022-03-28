import CustomMultiSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import apiAdmin from '@/services/apiAdmin'
import React, { useEffect, useState } from 'react'
import { mapClinics } from '../../adapters/mapClinic'

import { Container } from './styles'

interface ClinicsProps {
  specialistClinic?: MultiSelectOption[]
}

export const Clinics: React.FC<ClinicsProps> = ({ specialistClinic }) => {
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

  return (
    <Container>
      <h1>Clínicas</h1>
      <section>
        <CustomMultiSelect
          value={clinics}
          setValue={setClinics}
          variation="secondary"
          options={clinicOptions}
          disabled
        />
      </section>
    </Container>
  )
}
