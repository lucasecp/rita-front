import { Select } from '@/components/Form/Select'
import apiPatient from '@/services/apiPatient'
import React, { useEffect, useState } from 'react'
import clearSpecialCaracter from '@/helpers/clear/SpecialCaracteres'

interface SelectCityProps {
  setCity: (value: string) => void
  city: string
  uf: string
  disabled: boolean
}

const SelectCity: React.FC<SelectCityProps> = ({
  setCity,
  city,
  uf,
  disabled,
}) => {
  const [cityOptions, setCityOptions] = useState<any[]>([])

  const mapCity = (array: any[]) => {
    if (!array) return []
    return array.map((obj) => ({
      value: obj.descricao,
      label: obj.descricao,
    }))
  }

  useEffect(() => {

    if (!uf) {
      return
    }

    const getCity = async () => {
      try {
        const { data } = await apiPatient.get(`/municipio?idUF=${uf}`)
        const dataMapped = mapCity(data)

        
        setCityOptions(dataMapped)
      } catch ({ response }) {}
    }

    getCity()
  }, [uf])

  // const labelDefaultOption = () => {
  //   if (!uf) {
  //     return 'Necessário selecionar a UF'
  //   }
  //   if (uf === 'All') {
  //     return ''
  //   }
  //   return 'Selecione:'
  // }

  return (
    <Select
      options={cityOptions}
      label="Cidade:"
      labelDefaultOption="Selecione:"
      value={city}
      setValue={setCity}
      disabled={disabled}
    />
  )
}

export default SelectCity
