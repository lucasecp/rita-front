import { Select } from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import apiPatient from '@/services/apiPatient'

interface SelectUfProps {
  setUf: (value: string) => void
  uf: string
  setUfName: (value: string) => void
}

const SelectUf: React.FC<SelectUfProps> = ({ setUf, uf, setUfName }) => {
  const [ufOptions, setUfOptions] = useState<any[]>([])

  useEffect(() => {
    setUf('')
    const getUf = async () => {
      try {
        const { data } = await apiPatient.get(`/uf`)
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

  useEffect(() => {
    setUfNameToApi()
  }, [uf])

  const setUfNameToApi = () => {
    const ufMaches = ufOptions.find(
      (opt) => opt.value === uf && opt.value !== 'All',
    )

    if (ufMaches) {
      setUfName(ufMaches.label)
    }
  }

  const mapUf = (array: any[]) => {
    if (!array) return []
    return array.map((obj) => ({ value: String(obj.idUF), label: obj.sigla }))
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
