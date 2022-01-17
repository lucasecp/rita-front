import CustomMultSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import React, { useEffect, useState } from 'react'
import apiPatient from '@/services/apiPatient'

interface SelectUfProps {
  setUf: React.Dispatch<React.SetStateAction<MultiSelectOption[]>>
  uf: MultiSelectOption[]
}

const SelectUf: React.FC<SelectUfProps> = ({ setUf, uf }) => {
  const [ufOptions, setUfOptions] = useState<MultiSelectOption[]>([])

  const mapUf = (array: any[]) => {
    if (!array) return []
    return array.map((obj) => ({ id: obj.uf, name: obj.uf }))
  }

  useEffect(() => {
    const getUf = async () => {
      try {
        const { data } = await apiPatient.get(`/clinica/ufs`)
        const dataMapped = mapUf(data)

        const allLabelOption =
          dataMapped.length && dataMapped.length >= 2
            ? [{ name: 'Todas', id: 'All' }]
            : []

        setUfOptions([...allLabelOption, ...dataMapped])
      } catch ({ response }) {}
    }

    getUf()
  }, [])

  return (
    <CustomMultSelect
      options={ufOptions}
      label="UF:"
      value={uf}
      setValue={setUf}
    />
  )
}

export default SelectUf
