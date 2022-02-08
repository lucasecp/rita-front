import CustomMultSelect from '@/components/Form/MultSelect'
import formatMultSelectValue from '@/helpers/formatMultSelectValue'
import { queryFilterString } from '@/helpers/queryString/filter'
import { useLoading } from '@/hooks/useLoading'
import apiAdmin from '@/services/apiAdmin'
import React, { useEffect, useState } from 'react'
import { mapUf } from '../../helpers/mapDataFromApiToMultSelect'

const MultSelectUf = ({ setUf, uf, regional }) => {
  const [ufOptions, setUfOptions] = useState([])
  const { Loading } = useLoading()

  useEffect(() => {
    setUf([])
    const getUf = async () => {
      try {
        Loading.turnOn()
        const queryRegional = [
          { name: 'regional', value: formatMultSelectValue(regional) },
        ]

        const { data } = await apiAdmin.get(
          `/uf?${queryFilterString(queryRegional)}`,
        )
        const dataMapped = mapUf(data)

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

    getUf()
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

export default MultSelectUf
