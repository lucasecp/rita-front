import CustomMultSelect from '@/components/Form/MultSelect'
import formatMultSelectValue from '@/helpers/formatMultSelectValue'
import { queryFilterString } from '@/helpers/queryString/filter'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import React, { useEffect, useState } from 'react'
import mapDataFromApiToMultSelect from '../../helpers/mapDataFromApiToMultSelect'
import { verifyTypedFields } from '../../helpers/verifyTypedFields'

const MultSelectCity = ({ setCity, city, uf }) => {
  const [cityOptions, setCityOptions] = useState([])
  const { Loading } = useLoading()

  useEffect(() => {
    if (!uf.length) {
      return
    }

    const ufValue = verifyTypedFields([
      {
        name: 'idUf',
        value: formatMultSelectValue(uf),
      },
    ])

    const getCity = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiPatient.get(
          `/municipio?${queryFilterString(ufValue).slice(1, -1)}`
        )
        const dataMapped = mapDataFromApiToMultSelect(data?.dados)
        setCityOptions([{ name: 'Todas', id: 'All' }, ...dataMapped])
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

export default MultSelectCity
