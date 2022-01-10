import CustomMultSelect, { MultiSelectOption } from '@/components/Form/MultSelect'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import mapDataFromApiToMultSelect from '../../helpers/mapDataFromApiToMultSelect'

interface MultSelectServicesProps {
  setSpecialtys: Dispatch<SetStateAction<MultiSelectOption[]>>
  specialtys: MultiSelectOption[]
}

const MultSelectServices: React.FC<MultSelectServicesProps> = ({
  setSpecialtys,
  specialtys,
}) => {

  const [serviceOptions, setServicesOptions] = useState([{ name: '', id: 0 }])
  const { Loading } = useLoading()

  useEffect(() => {
    const getServices = async () => {
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
      value={specialtys}
      setValue={setSpecialtys}
    />
  )
}

export default MultSelectServices
