import React, { useEffect, useRef, useState } from 'react'
import { Content, Container } from './styles'
import Multiselect from 'multiselect-react-dropdown'
import { adjustSelectOptions } from './adjustSelectOptions'
import apiAdmin from '@/services/apiAdmin'
import { ReactComponent as CloseMultSelectIcon } from '@/assets/icons/close-multselct.svg'
import mapDataToMultSelect from './adapters/mapDataToMultSelect'
import generateRandomString from '@/helpers/generateRandomString'
import { useLoading } from '@/hooks/useLoading'
import CustomMultSelect from '@/components/Form/MultSelect'
import { AutocompleteOptions } from '@/components/Form/Autocomplete'

export interface MultiSelectOption {
  id: string | number
  name: string
}

interface MultiSelectServicesProps {
  messageError?: string
  hasError?: boolean
  plan: AutocompleteOptions
}

const MultSelectServices: React.FC<MultiSelectServicesProps> = ({ plan }) => {
  const { Loading } = useLoading()
  const containerDiv = useRef(null)

  const [services, setServices] = useState<MultiSelectOption[]>([])

  useEffect(() => {
    setServices([])

    const loadServices = async () => {
      Loading.turnOn()
      try {
        const servicesResponse = await apiAdmin.get(`/plano/${plan.value}`)
        setServices(mapDataToMultSelect(servicesResponse.data.servicos))
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

export default MultSelectServices
