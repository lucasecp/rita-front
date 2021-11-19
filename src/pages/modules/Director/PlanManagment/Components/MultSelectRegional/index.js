import CustomMultSelect from '@/components/Form/MultSelect'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import React, { useEffect, useState } from 'react'
import mapDataFromApiToMultSelect from '../../helpers/mapDataFromApiToMultSelect'

const MultSelectRegional = ({setRegional, regional}) => {
  const [regionalOptions, setRegionalOptions] = useState([]);
  const {Loading} = useLoading()

  useEffect(() => {

      const getRegional = async () => {
         try{
           Loading.turnOn()
          const {data} = await  apiPatient.get('/regional')
          const dataMapped = mapDataFromApiToMultSelect(data?.dados)
          setRegionalOptions(dataMapped)
         }
         catch({response}){

         }
         finally{
          Loading.turnOff()
         }
      }

     getRegional()
  }, []);

  return (
    <CustomMultSelect
    options={regionalOptions}
    label="Regional:"
    value={regional}
    setValue={setRegional}
  />
  )
}

export default MultSelectRegional
