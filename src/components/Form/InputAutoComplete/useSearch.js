import axios from 'axios'
import { useEffect } from 'react'

export default (endPoint, urlApi, inputValue, setOptions, setLoading) => {

  useEffect(() => {
    let cancel
    const getOptions = async () => {
      try {
        setLoading(true)
        const { data } = await urlApi.get(endPoint, {
          params: { nome: inputValue },
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })

        const dataMapped = mapData(data?.dados)
        setOptions(dataMapped)
      } catch (error) {
        if (axios.isCancel(error)) return
      } finally {
        setLoading(false)
      }
    }
    getOptions()
    return () => cancel()
  }, [inputValue])

  const mapData = (data) => {
    if (!data) return []
    return data.map((el) => ({ label: el.nome, value: el.id }))
  }
}
