import CustomMultSelect from '@/components/Form/MultSelect'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import React, { useEffect, useState } from 'react'
import mapDataFromApiToMultSelect from '../../helpers/mapDataFromApiToMultSelect'

const MultSelectCity = ({setCity, city, uf}) => {
  const [cityOptions, setCityOptions] = useState([]);
  const {Loading} = useLoading()

  useEffect(() => {
      if(!uf.length){
        return
      }

      const getCity = async () => {
         try{
           Loading.turnOn()
          const {data} = await  apiPatient.get('/cidades')
          const dataMapped = mapDataFromApiToMultSelect(data?.dados)
          setCityOptions(dataMapped)
         }
         catch({response}){

         }
         finally{
          Loading.turnOff()
         }
      }

     getCity()
  }, []);

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
