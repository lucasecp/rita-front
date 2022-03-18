import CustomMultiSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import apiAdmin from '@/services/apiAdmin'
import React, { useEffect, useState } from 'react'

import { Container } from './styles'

interface ClinicsProps {
  clinic?: MultiSelectOption[]
  setClinic: (value: any) => void
  errors: any
  setErrors: (error: any) => any
  [x: string]: any
}

export const MultSelectClinics: React.FC<ClinicsProps> = ({
  clinic,
  setClinic,
  errors,
  setErrors,
  ...rest
}) => {

  const [clinics, setClinics] = useState<MultiSelectOption[]>([])

  const [clinicOptions, setClinicOptions] = useState<MultiSelectOption[]>([])

  const mapClinics = (array: any[]) => {
    if (!array) return []

    return array
      .map((obj) => ({
        id: obj.idClinica,
        name: obj.descricao,
      }))
      .filter((specialty) => specialty.id && specialty.name)
  }

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

  // useEffect(() => {
  //   setClinics(clinic || [])
  // }, [clinic])

  useEffect(() => {
    setClinic(
      clinics
    )
    setErrors((error: any) => ({ ...error, clinics: '' }))
  }, [clinics])

  // const onChangingSelect = (values: MultiSelectOption[]) => {
  //   const hasAllOption = values.some((val) => val.id === 'All')

  //   if (hasAllOption) {
  //     return setClinics(clinicOptions)
  //   }
  //   return setClinics(values)
  // }

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
          {...rest}
        />
      </section>
    </Container>
  )
}
