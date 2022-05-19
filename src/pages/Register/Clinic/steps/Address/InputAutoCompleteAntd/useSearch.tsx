import apiAdmin from '@/services/apiAdmin'
import axios from 'axios'
import { useEffect } from 'react'
import { fromApi } from './Adapters'
import { setOptionsType } from './types'

export default (
  inputValue: string,
  setOptions: setOptionsType,
  uf: string,
): void => {
  useEffect(() => {
    let cancel: any
    if (!inputValue && !uf) {
      return
    }

    const getOptions = async () => {
      try {
        const { data } = await apiAdmin.get('/municipio', {
          params: { descricao: inputValue, idUF: uf },
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
        setOptions(fromApi(data))
      } catch (error: any) {
        if (axios.isCancel(error)) {
        }
      }
    }

    getOptions()

    return () => cancel()
  }, [inputValue, uf])
}
