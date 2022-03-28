import React, { useEffect, useState } from 'react'

import apiAdmin from '@/services/apiAdmin'
import { useLoading } from '@/hooks/useLoading'
import mapDataToMultSelect from './adapters/toApi'

import CustomMultSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import { AutocompleteOptions } from '@/components/Form/Autocomplete'

interface MultiSelectServicesProps {
  plan: AutocompleteOptions
}

export const MultSelectServices: React.FC<MultiSelectServicesProps> = ({
  plan,
}) => {
  const { Loading } = useLoading()

  const [services, setServices] = useState<MultiSelectOption[]>([])

  useEffect(() => {
    setServices([])

    const loadServices = async () => {
      try {
        Loading.turnOn()

        const { data } = await apiAdmin.get(`/plano/${plan.value}`)

        const servicesMapped = data.servicos.map((service) => ({
          id: service.id,
          name: service.nome,
        }))

        setServices(servicesMapped)
      } catch ({ error }) {
        console.log(error)
      } finally {
        Loading.turnOff()
      }
    }

    plan.value ? loadServices() : setServices([])
  }, [plan.value])

  return (
    <CustomMultSelect
      label="Serviços*:"
      variation="secondary"
      value={services}
      disabled
    />
  )
}
