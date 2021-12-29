import { Select } from '@/components/Form/Select'
import apiPatient from '@/services/apiPatient'
import React, { useEffect, useState } from 'react'

const SelectCity = ({ setCity, city, uf }) => {
  const [cityOptions, setCityOptions] = useState([])

  useEffect(() => {
    if (!uf || uf === 'All') {
      return setCityOptions([])
    }
    setCity('')

    const getCity = async () => {
      try {
        const { data } = await apiPatient.get(`/municipio?uf=${uf}`)
        const dataMapped = mapCity(data)

        const allOptions =
          dataMapped.length && dataMapped.length >= 2
            ? [{ label: 'Todas', value: 'ALL' }]
            : []

        setCityOptions([...allOptions, ...dataMapped])
        console.log(dataMapped)
      } catch ({ response }) {}
    }

    getCity()
  }, [uf])

  const mapCity = (array = []) => {
    if (!array) return []
    return array.map((obj) => ({
      value: obj.descricao,
      label: obj.descricao,
    }))
  }

  return (
    <Select
      options={cityOptions}
      label="Cidade:"
      labelDefaultOption={!uf ? 'Necessário selecionar a UF' : 'Selecione:'}
      value={city}
      setValue={setCity}
    />
  )
}

export default SelectCity
