import { Select, SelectOption } from '@/components/Form/Select'
import apiAdmin from '@/services/apiAdmin'
import { toast } from '@/styles/components/toastify'
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
  const [cityOptions, setCityOptions] = useState<SelectOption[]>([])

  const [defaultLabel, setDefaultLabel] = useState(initialLabel)

  const mapCity = (array: { descricao: string }[]) => {
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
      if (typeof uf !== 'string') {
        try {
          setDefaultLabel('Carregando')
          const { data } = await apiAdmin.get(`/municipio?idUF=${uf}`)

          const citiesMapped = mapCity(data)

          setCityOptions(citiesMapped)

          if (!city) {
            setCity('')
            setDefaultLabel(initialLabel)
          }
        } catch ({ response }) {
          toast.error('Erro ao carregar cidades')
        }
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
      disabled={disabled}
      {...rest}
    />
  )
}

export default SelectCity
