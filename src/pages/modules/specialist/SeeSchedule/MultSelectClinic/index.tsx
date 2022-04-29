import { Select, SelectOption } from '@/components/Form/Select'
import apiAdmin from '@/services/apiAdmin'
import React, { useEffect, useState, SetStateAction } from 'react'
/** Styles */
import { Container } from './styles'
/** Helpers */
import { mapClinics } from '../Helpers/TransformData'
/** Hooks */
import { useScheduleSpecialist } from '../hooks'

interface ClinicsProps {
  clinics: string
  setClinics: React.Dispatch<SetStateAction<string>>
  errors: any
  color?: string
  label?: string
  [x: string]: any
}

export const SelectClinic: React.FC<ClinicsProps> = ({
  clinics,
  setClinics,
  errors,
  color,
  label,
  ...rest
}) => {
  const [clinicsOptions, setClinicsOptions] = useState<SelectOption[]>([])
  const {
    setCurrentDataClinicAndDoctor,
    currentDataClinicAndDoctor,
    clinics: clinicas,
  } = useScheduleSpecialist()

  useEffect(() => {
    const getSpecialtys = async () => {
      try {
        const dataMapped = mapClinics(clinicas)

        if (!dataMapped.length) {
          return setClinicsOptions([
            { label: 'Nenhuma clínica encontrada.', value: '' },
          ])
        }

        setClinicsOptions(dataMapped)
      } catch (error) {}
    }

    getSpecialtys()
  }, [clinicas])

  useEffect(() => {
    setCurrentDataClinicAndDoctor({
      ...currentDataClinicAndDoctor,
      idClinic: Number(clinics),
    })
  }, [clinics])

  return (
    <Container>
      {!label && <h1>Clinicas</h1>}
      <section>
        <Select
          value={clinics}
          setValue={setClinics}
          color={color}
          options={clinicsOptions}
          hasError={!!errors?.clinics}
          msgError={errors?.clinics}
          name="clinics"
          label={label}
          variation="secondary"
          {...rest}
        />
      </section>
    </Container>
  )
}
