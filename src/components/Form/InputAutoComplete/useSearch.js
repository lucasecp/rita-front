import axios from 'axios'
import { useEffect } from 'react'
import {staticAutocomplete} from './static'

export default (
  endPoint,
  urlApi,
  inputValue,
  setOptions,
  setLoading
) => {
  useEffect(() => {
    let cancel
    const dataMapped = mapData(staticAutocomplete)
    console.log(dataMapped);
    setOptions(dataMapped)

    const getOptions = async () => {
      try {
        setLoading(true)
        const { data } = await urlApi.get(endPoint, {
          params: { nome: inputValue },
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })

      } catch (error) {
      } finally {
        setLoading(false)
      }
    }
    // getOptions()
    // return () => cancel()
  }, [inputValue])

  const mapData = (data) => {
    // if (!data) return []

    const specialty = data.especialidades.map(spec => {
      return {
        grouping: 'Especialidades',
        label: spec.nome,
        value: spec.id
      }
    })
    const doctor = data.medicos.map(spec => {
      return {
        grouping: 'Médicos',
        label: spec.nome,
        value: spec.id
      }
    })
    const clinic = data.clinicas.map(spec => {
      return {
        grouping: 'Clínicas',
        label: spec.nome,
        value: spec.id
      }
    })
    // const options = data.map((el) => {
    //   const firstLetter = option.title[0].toUpperCase();
    //   return {
    //     grouping: 'doctor',
    //     ...option,
    //   };
    // });
     return [...clinic,...specialty, ...doctor]
     }

}
