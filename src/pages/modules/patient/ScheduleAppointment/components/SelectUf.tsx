import { Select } from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import apiPatient from '@/services/apiPatient'

interface SelectUfProps {
  setUf: (value: string) => void
  uf: string
}

const SelectUf: React.FC<SelectUfProps> = ({ setUf, uf }) => {
  const [ufOptions, setUfOptions] = useState<any[]>([])

  useEffect(() => {
    setUf('')
    const getUf = async () => {
      try {
        const { data } = await apiPatient.get(`/clinica/ufs`)
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

  const mapUf = (array: any[]) => {
    if (!array) return []
    return array.map((obj) => ({ value: obj.uf, label: obj.uf }))
  }

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
