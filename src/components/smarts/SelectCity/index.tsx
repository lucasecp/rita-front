import { Select } from '@/components/Form/Select'
import apiAdmin from '@/services/apiAdmin'
import React, { useEffect, useState } from 'react'

interface SelectCityProps {
  setCity: (value: string) => void
  city: string
  uf: string
  disabled?: boolean
  [x: string]: any
}

const initialLabel = 'Selecione:'

const SelectCity: React.FC<SelectCityProps> = ({
  setCity,
  city,
  uf,
  disabled,
  ...rest
}) => {
  const [cityOptions, setCityOptions] = useState<any[]>([])

  const [defaultLabel, setDefaultLabel] = useState(initialLabel)

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
        setDefaultLabel('Carregando')

        const { data } = await apiAdmin.get(`/municipio?idUF=${uf}`)

        const dataMapped = mapCity(data)

        setCityOptions(dataMapped)

        setCity('')
      } catch ({ response }) {
      } finally {
        setDefaultLabel(initialLabel)
      }
    }

    getCity()
  }, [uf])

  return (
    <Select
      options={cityOptions}
      label="Cidade:"
      labelDefaultOption={defaultLabel}
      value={city}
      setValue={setCity}
      {...rest}
      disabled={disabled}
    />
  )
}

export default SelectCity
