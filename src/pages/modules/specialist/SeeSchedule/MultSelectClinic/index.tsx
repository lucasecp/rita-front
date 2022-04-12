import {Select ,SelectOption} from '@/components/Form/Select'
import apiAdmin from '@/services/apiAdmin'
import React, { useEffect, useState, SetStateAction } from 'react'
/** Styles */
import { Container } from './styles'
/** Helpers */
import { mapClinics } from '../Helpers/TransformData'
interface ClinicsProps {
  clinics: string
  setClinics: React.Dispatch<SetStateAction<string>>
  errors: any
  color?: string
  label?: string
  [x: string]: any
  specialistName: string
}

export const SelectClinic: React.FC<ClinicsProps> = ({
  clinics,
  setClinics,
  errors,
  color,
  label,
  specialistName,
  ...rest
}) => {
  const [clinicsOptions, setClinicsOptions] = useState<SelectOption[]>([])

  useEffect(() => {
    const getSpecialtys = async () => {
      try {
        const { data } = await apiAdmin.get(
          `/clinica?limit=100&skip=0&status=A&especialista=${specialistName}`,
        )

        console.log({data})

        const dataMapped = mapClinics(data?.clinicas)

        if (!dataMapped.length) {
          return setClinicsOptions([])
        }

        setClinicsOptions(dataMapped)
      } catch (error) {
        console.error(error)
      }
    }

    getSpecialtys()
  }, [specialistName])

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
          variation='secondary'
          {...rest}
        />
      </section>
    </Container>
  )
}
