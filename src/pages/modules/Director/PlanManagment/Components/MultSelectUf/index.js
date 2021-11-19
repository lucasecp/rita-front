import CustomMultSelect from '@/components/Form/MultSelect'
import formatMultSelectValue from '@/helpers/formatMultSelectValue'
import { queryFilterString } from '@/helpers/queryString/filter'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import React, { useEffect, useState } from 'react'
import mapDataFromApiToMultSelect, { mapUf } from '../../helpers/mapDataFromApiToMultSelect'
import { staticUf } from '../../static/fieldsMultSelect'

const MultSelectUf = ({ setUf, uf, regional }) => {
  const [ufOptions, setUfOptions] = useState([])
  const { Loading } = useLoading()

  useEffect(() => {
    if (!regional.length) {
      setUfOptions(staticUf)
      return
    }

    const getUf = async () => {
      try {
        Loading.turnOn()
        const queryRegional = [{name: 'idRegional', value: formatMultSelectValue(regional)}]

        const { data } = await apiPatient.get(
          `/uf?${queryFilterString(queryRegional)}`
        )
        const dataMapped = mapUf(data?.dados)


        setUfOptions(dataMapped)

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
