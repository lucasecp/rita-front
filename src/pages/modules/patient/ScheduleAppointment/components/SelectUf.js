import { Select } from '@/components/Form/Select'
import apiPatient from '@/services/apiPatient'
import React, { useEffect, useState } from 'react'

const SelectUf = ({ setUf, uf }) => {
  const [ufOptions, setUfOptions] = useState([])

  useEffect(() => {
    setUf([])
    const getUf = async () => {
      try {
        const { data } = await apiPatient.get(`/uf?`)
        const dataMapped = mapUf(data?.dados)

        setUfOptions(dataMapped)
      } catch ({ response }) {}
    }

    getUf()
  }, [])

  const mapUf = (array = []) => {
    if (!array) return []
    return array.map((obj) => ({ value: obj.idUF, label: obj.sigla }))
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
