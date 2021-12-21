import { Select } from '@/components/Form/Select'
import apiPatient from '@/services/apiPatient'
import React, { useEffect, useState } from 'react'

const SelectCity = ({ setCity, city, uf }) => {
  const [cityOptions, setCityOptions] = useState([])

  useEffect(() => {
    console.log(uf);
    if (!uf) {
      return
    }


    const getCity = async () => {
      try {
        const { data } = await apiPatient.get(`/municipio?idUF=${uf}`)
        const dataMapped = mapCity(data?.dados)

        setCityOptions([{label: 'Todos', value: 'ALL'},...dataMapped])
      } catch ({ response }) {
    }
  }

    getCity()
  }, [uf])

  const mapCity = (array = []) => {
    if (!array) return []
    return array.map((obj) => ({ value: obj.idMunicipio, label: obj.descricao }))
  }

  return (
    <Select

      options={cityOptions}
      label="Cidade:"
      labelDefaultOption="Necessário selecionar a UF"
      value={city}
      setValue={setCity}
    />
  )
}

export default SelectCity
