import CustomMultSelect from '@/components/Form/MultSelect'
import formatMultSelectValue from '@/helpers/formatMultSelectValue'
import { queryFilterString } from '@/helpers/queryString/filter'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import React, { useEffect, useState } from 'react'
import { mapUf } from '../../../../helpers/mapDataFromApiToMultSelect'

export const Ufs = ({ setUf, uf, regional }) => {
  const [ufOptions, setUfOptions] = useState([])
  const { Loading } = useLoading()

  useEffect(() => {
    setUf([])
    const loadUfs = async () => {
      try {
        Loading.turnOn()
        const queryRegional = [
          { name: 'idRegional', value: formatMultSelectValue(regional) },
        ]

        const { data } = await apiPatient.get(
          `/uf?${queryFilterString(queryRegional)}`,
        )
        const dataMapped = mapUf(data?.dados)

        if (!dataMapped.length) {
          return setUfOptions([])
        }

        setUfOptions(() => {
          if (dataMapped.length === 1) {
            return dataMapped
          }
          return [{ name: 'Todos', id: 'All' }, ...dataMapped]
        })
      } catch ({ response }) {
      } finally {
        Loading.turnOff()
      }
    }

    loadUfs()
  }, [regional])

  return (
    <CustomMultSelect
      options={ufOptions}
      label="UF:"
      value={uf}
      setValue={setUf}
    />
  )
}
