import CustomMultiSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import apiAdmin from '@/services/apiAdmin'
import React, { useEffect, useState } from 'react'
import { mapSpecialtys } from '../../adapters/mapSpecialtys'

import { Container } from './styles'

interface ClinicSpecialtysProps {
  specialistSpecialtys: MultiSelectOption[]
}

export const Specialty: React.FC<ClinicSpecialtysProps> = ({
  specialistSpecialtys,
}) => {
  const [specialtys, setSpecialtys] = useState<MultiSelectOption[]>(
    specialistSpecialtys || [],
  )

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

        setSpecialtysOptions(dataMapped)
      } catch ({ response }) {}
    }

    getSpecialtys()
  }, [])

  useEffect(() => {
    setSpecialtys(specialistSpecialtys || [])
  }, [specialistSpecialtys])

  return (
    <Container>
      <h1>Especialidades</h1>
      <section>
        <CustomMultiSelect
          value={specialtys}
          setValue={setSpecialtys}
          variation="secondary"
          options={specialtysOptions}
          disabled
        />
      </section>
    </Container>
  )
}
