import CustomMultSelect from '@/components/Form/MultSelect'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import { toast } from '@/styles/components/toastify'
import React, { useEffect, useState } from 'react'
import mapDataFromApiToMultSelect from '../../helpers/mapDataFromApiToMultSelect'

// interface RegionalProps {}

export const Regionals: React.FC = ({ setRegional, regional }) => {
  const [regionalOptions, setRegionalOptions] = useState([])
  const { Loading } = useLoading()

  useEffect(() => {
    const loadRegional = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiPatient.get('/regional')
        const dataMapped = mapDataFromApiToMultSelect(data?.dados)

        if (!dataMapped.length) {
          return setRegionalOptions([])
        }

        setRegionalOptions(() => {
          if (dataMapped.length === 1) {
            return dataMapped
          }
          return [{ name: 'Todas', id: 0 }, ...dataMapped]
        })
      } catch ({ response }) {
        toast.error('Erro ao carregar regionais!')
      } finally {
        Loading.turnOff()
      }
    }

    loadRegional()
  }, [])

  return (
    <CustomMultSelect
      options={regionalOptions}
      label="Regional:"
      value={regional}
      setValue={setRegional}
    />
  )
}
