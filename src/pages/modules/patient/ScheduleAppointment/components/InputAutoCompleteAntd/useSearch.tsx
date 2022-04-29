import axios from 'axios'
import { useEffect } from 'react'
import apiPatient from '@/services/apiPatient'
import { fromApi } from './Adapters'
import { setOptionsType } from './types'

export default (inputValue: string, setOptions: setOptionsType): void => {
  useEffect(() => {
    let cancel: any

    const getOptions = async () => {
      try {
        const { data } = await apiPatient.get('/paciente/busca-clinicas', {
          params: { nome: inputValue },
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
        setOptions(fromApi(data))
      } catch (error: any) {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message)
        }
      }
    }

    getOptions()

    return () => cancel()
  }, [inputValue])
}
