import CustomMultSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import formatMultSelectValue from '@/helpers/formatMultSelectValue'
import { queryFilterString } from '@/helpers/queryString/filter'
import apiPatient from '@/services/apiPatient'
import React, { useEffect, useState } from 'react'
import { verifyTypedFields } from '../helpers/verifyTypedFields'

interface MultSelectSelectCityProps {
  setCity: React.Dispatch<React.SetStateAction<MultiSelectOption[]>>
  city: MultiSelectOption[]
  uf: MultiSelectOption[]
}

const SelectCity: React.FC<MultSelectSelectCityProps> = ({
  setCity,
  city,
  uf,
}) => {
  const [cityOptions, setCityOptions] = useState<MultiSelectOption[]>([])

  const mapCity = (array: any[]) => {
    if (!array) return []
    return array.map((obj) => ({
      id: obj.cidade,
      name: obj.cidade,
    }))
  }

  useEffect(() => {
    if (!uf.length) {
      setCity([])
      return setCityOptions([])
    }

    const ufValue = verifyTypedFields([
      {
        name: 'uf',
        value: formatMultSelectValue(uf),
      },
    ])

    const getCity = async () => {
      try {
        const { data } = await apiPatient.get(
          `/clinica/municipios?${queryFilterString(ufValue)}`,
        )
        const dataMapped = mapCity(data)

        const allOptions =
          dataMapped.length && dataMapped.length >= 2
            ? [{ name: 'Todas', id: 'ALL' }]
            : []

        setCityOptions([...allOptions, ...dataMapped])
      } catch ({ response }) {}
    }

    getCity()
  }, [uf])

  return (
    <CustomMultSelect
      options={cityOptions}
      label="Cidade:"
      value={city}
      setValue={setCity}
      disabled={!uf.length}
    />
  )
}

export default SelectCity
