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
      setCity('')
      return setCityOptions([])
    }

    const getCity = async () => {
      try {
        const { data } = await apiPatient.get(`/clinica/municipios?uf=${uf}`)
        const dataMapped = mapCity(data)

        const allOptions =
          dataMapped.length && dataMapped.length >= 2
            ? [{ label: 'Todas', value: 'All' }]
            : []

        setCityOptions([...allOptions, ...dataMapped])
      } catch ({ response }) {}
    }

    getCity()
  }, [uf])

  const mapCity = (array: any[]) => {
    if (!array) return []
    return array.map((obj) => ({
      value: obj.cidade,
      label: obj.cidade,
    }))
  }

  const labelDefaultOption = () => {
    if (!uf) {
      return 'Necessário selecionar a UF'
    }
    if (uf === 'All') {
      return ''
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
