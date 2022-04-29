import { Select } from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import apiAdmin from '@/services/apiAdmin'

interface SelectUfProps {
  setUf: (value: string) => void
  uf: string
}

const SelectUf: React.FC<SelectUfProps> = ({ setUf, uf }) => {
  const [ufOptions, setUfOptions] = useState<any[]>([])

  const mapUf = (array: any[]) => {
    if (!array) return []
    return array.map((obj) => ({ value: obj.uf, label: obj.uf }))
  }
  
  useEffect(() => {
    const getUf = async () => {
      try {
        const { data } = await apiAdmin.get(`/clinica/ufs`)
        const dataMapped = mapUf(data)

        const allLabelOption =
          dataMapped.length && dataMapped.length >= 2
            ? [{ label: 'Todas', value: 'All' }]
            : []

        setUfOptions([...allLabelOption, ...dataMapped])
      } catch ({ response }) {}
    }

    getUf()
  }, [])


  return (
    <Select
      options={ufOptions}
      label="UF:"
      labelDefaultOption="Selecione"
      value={uf}
      setValue={setUf}
    />
  )
}

export default SelectUf
