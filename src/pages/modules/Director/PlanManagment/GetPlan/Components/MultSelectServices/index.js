import CustomMultSelect from '@/components/Form/MultSelect'
import { useLoading } from '@/hooks/useLoading'
import apiAdmin from '@/services/apiAdmin'
import React, { useEffect, useState } from 'react'
import mapDataFromApiToMultSelect from '../../helpers/mapDataFromApiToMultSelect'

const MultSelectServices = ({ setServices, services }) => {
  const [serviceOptions, setServicesOptions] = useState([])
  const { Loading } = useLoading()

  useEffect(() => {
    const getServices = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiAdmin.get('/servico')
        const dataMapped = mapDataFromApiToMultSelect(data?.dados)

        if (!dataMapped.length) {
          return setServicesOptions([])
        }

        setServicesOptions(() => {
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

    getServices()
  }, [])

  return (
    <CustomMultSelect
      options={serviceOptions}
      label="Serviços:"
      value={services}
      setValue={setServices}
    />
  )
}

export default MultSelectServices
