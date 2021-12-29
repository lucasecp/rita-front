import axios from 'axios'
import { useEffect } from 'react'
import apiPatient from '@/services/apiPatient'
import { fromApi } from './Adapters'
import { setOptionsType } from './types'

export default (inputValue: string, setOptions: setOptionsType) => {
  useEffect(() => {
    let cancel: any

    const getOptions = async () => {
      try {
        const { data } = await apiPatient.get('/paciente/busca-clinicas', {
          params: { nome: inputValue },
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
        setOptions(fromApi(data))
       console.log(fromApi(data));
       
        
      } catch (error) {
        console.log(error)
      }
    }

    getOptions()

    return () => cancel()
  }, [inputValue])
}
