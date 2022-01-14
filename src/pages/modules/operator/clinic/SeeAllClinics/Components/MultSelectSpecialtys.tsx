import CustomMultSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { mapSpecialtys } from '../helpers/mapDataFromApiToMultSelect'

interface MultSelectSpecialtysProps {
  setSpecialtys: Dispatch<SetStateAction<MultiSelectOption[]>>
  specialtys: MultiSelectOption[]
}

const MultSelectSpecialtys: React.FC<MultSelectSpecialtysProps> = ({
  setSpecialtys,
  specialtys,
}) => {
  const [specialtysOptions, setSpecialtysOptions] = useState<
    MultiSelectOption[]
  >([])
  const { Loading } = useLoading()

  useEffect(() => {
    const getSpecialtys = async () => {
      try {
        Loading.turnOn()
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
        Loading.turnOff()
      }
    }

    getSpecialtys()
  }, [])

  return (
    <CustomMultSelect
      options={specialtysOptions}
      label="Especialidades:"
      value={specialtys}
      setValue={setSpecialtys}
    />
  )
}

export default MultSelectSpecialtys
