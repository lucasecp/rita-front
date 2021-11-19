import CustomMultSelect from '@/components/Form/MultSelect'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import React, { useEffect, useState } from 'react'
import mapDataFromApiToMultSelect from '../../helpers/mapDataFromApiToMultSelect'

const MultSelectServices = ({setServices, services}) => {
  const [serviceOptions, setServicesOptions] = useState([]);
  const {Loading} = useLoading()

  useEffect(() => {

      const getServices = async () => {
         try{
           Loading.turnOn()
          const {data} = await  apiPatient.get('/servico')
          const dataMapped = mapDataFromApiToMultSelect(data?.dados)
          setServicesOptions(dataMapped)
         }
         catch({response}){

         }
         finally{
          Loading.turnOff()
         }
      }

     getServices()
  }, []);

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
