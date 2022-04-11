import CustomMultiSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import apiAdmin from '@/services/apiAdmin'
import React, { useEffect, useState, SetStateAction } from 'react'

import { Container } from './styles'

interface ClinicsProps {
  clinics: MultiSelectOption[]
  setClinics: React.Dispatch<SetStateAction<MultiSelectOption[]>>
  errors: any
  color?: string
  label?: string
  [x: string]: any
  specialistName: string
}

export const MultSelectClinic: React.FC<ClinicsProps> = ({
  clinics,
  setClinics,
  errors,
  color,
  label,
  specialistName,
  ...rest
}) => {
  const [clinicsOptions, setClinicsOptions] = useState<MultiSelectOption[]>([])

  const mapClinics = (arrayDoctor: any[], arrayClinic: any[]) => {
    if (!arrayDoctor && !arrayClinic) return []

    return arrayClinic
      .map((obj) => ({
        id: obj.idEspecialidade,
        name: obj.descricao,
        rqeRequired: obj.requerInscricao,
      }))
      .filter(
        (specialty) =>
          specialty.id &&
          specialty.name &&
          arrayDoctor.some((doc) => doc.descricao === specialty.name),
      )
  }

  useEffect(() => {
    const getSpecialtys = async () => {
      try {
        const { data } = await apiAdmin.get(
          `/clinica?limit=100&skip=0&status=A&especialista=${specialistName}`,
        )
        console.log({data})
        // const { data: dataClinic } = await apiAdmin.get(
        //   `clinica/minha-clinica/${idClinic}`,
        // )

        // const dataMapped = mapClinics(
        //   data?.especialidades,
        //   dataClinic.especialidade,
        // )

        // if (!dataMapped.length) {
        //   return setClinicsOptions([])
        // }

        //setClinicsOptions(dataMapped)
      } catch (error) {
        console.error({error})
      }
    }

    getSpecialtys()
  }, [specialistName])

  return (
    <Container>
      {!label && <h1>Clinicas</h1>}
      <section>
        <CustomMultiSelect
          value={clinics}
          setValue={setClinics}
          color={color}
          options={clinicsOptions}
          hasError={!!errors?.clinics}
          messageError={errors?.clinics}
          name="clinics"
          label={label}
          {...rest}
        />
      </section>
    </Container>
  )
}
