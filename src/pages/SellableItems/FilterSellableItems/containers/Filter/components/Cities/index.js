import CustomMultSelect from '@/components/Form/MultSelect'
import formatMultSelectValue from '@/helpers/formatMultSelectValue'
import { queryFilterString } from '@/helpers/queryString/filter'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import React, { useEffect, useState } from 'react'
import { mapCity } from '../../../../helpers/mapDataFromApiToMultSelect'
import { verifyTypedFields } from '../../../../helpers/verifyTypedFields'

export const Cities = ({ setCity, city, uf }) => {
  const [cityOptions, setCityOptions] = useState([])
  const { Loading } = useLoading()

  useEffect(() => {
    setCity([])
    if (!uf.length) {
      return
    }

    const ufValue = verifyTypedFields([
      {
        name: 'idUF',
        value: formatMultSelectValue(uf),
      },
    ])

    const getCity = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiPatient.get(
          `/municipio?${queryFilterString(ufValue)}`,
        )
        const dataMapped = mapCity(data?.dados)

        if (!dataMapped.length) {
          return setCityOptions([])
        }

        setCityOptions(() => {
          if (dataMapped.length === 1) {
            return dataMapped
          }
          return [{ name: 'Todas', id: 0 }, ...dataMapped]
        })
      } catch ({ response }) {
      } finally {
        Loading.turnOff()
      }
    }

    getCity()
  }, [uf])

  return (
    <CustomMultSelect
      disabled={!uf.length}
      options={cityOptions}
      label="Cidade:"
      value={city}
      setValue={setCity}
    />
  )
}
