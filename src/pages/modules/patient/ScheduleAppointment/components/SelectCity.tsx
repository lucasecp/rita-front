import { Select } from '@/components/Form/Select'
import apiPatient from '@/services/apiPatient'
import React, { useEffect, useState } from 'react'

interface SelectCityProps {
  setCity: (value: string) => void
  city: string
  uf: string
}

const SelectCity: React.FC<SelectCityProps> = ({ setCity, city, uf }) => {
  const [cityOptions, setCityOptions] = useState<any[]>([])

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
      } catch ({ response }) {}
    }

    getCity()
  }, [uf])

  const mapCity = (array: any[]) => {
    if (!array) return []
    return array.map((obj) => ({
      value: obj.descricao,
      label: obj.descricao,
    }))
  }

  const labelDefaultOption = () => {
    if (!uf) {
      return 'Necessário selecionar a UF'
    }
    if (uf === 'All') {
      return 'Todas'
    }
    return 'Selecione:'
  }

  return (
    <Select
      options={cityOptions}
      label="Cidade:"
      labelDefaultOption={labelDefaultOption()}
      value={city}
      setValue={setCity}
      disabled={uf === 'All'}
    />
  )
} 

export default SelectCity
