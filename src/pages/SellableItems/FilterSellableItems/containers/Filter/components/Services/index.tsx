import React, { useEffect, useState } from 'react'

import CustomMultSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import { toast } from '@/styles/components/toastify'
import mapDataFromApiToMultSelect from '../../helpers/mapDataFromApiToMultSelect'

interface ServicesFilterSellableItems {
  setServices: React.Dispatch<React.SetStateAction<MultiSelectOption[]>>
  services: MultiSelectOption[]
}

export const Services: React.FC<ServicesFilterSellableItems> = ({
  setServices,
  services,
}) => {
  const [serviceOptions, setServicesOptions] = useState(
    [] as MultiSelectOption[],
  )
  const { Loading } = useLoading()

  useEffect(() => {
    const loadServices = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiPatient.get('/servico')
        const dataMapped = mapDataFromApiToMultSelect(data?.dados)

        if (!dataMapped.length) {
          return setServicesOptions([])
        }

        setServicesOptions(() => {
          if (dataMapped.length === 1) {
            return dataMapped
          }
          return [{ name: 'Todos', id: 0 }, ...dataMapped]
        })
      } catch ({ response }) {
        toast.error('Erro ao carregar serviços!')
      } finally {
        Loading.turnOff()
      }
    }

    loadServices()
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

export default Services
