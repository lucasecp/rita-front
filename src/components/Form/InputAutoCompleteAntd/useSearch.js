import axios from 'axios'
import { useEffect } from 'react'
// import { staticAutocomplete } from './static'

// import ItemDoctor from './iItemDoctor'
// import ItemClinic from './iItemClinic'
import ItemSpecialty from './itemSpecialty'
import apiPatient from '@/services/apiPatient'
import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'

export default (inputValue, setOptions) => {
  useEffect(() => {
    let cancel
    // const dataMapped = mapData(staticAutocomplete)

    const getOptions = async () => {
      try {
        // setLoading(true)
        const { data } = await apiPatient.get('/paciente?limit=10&skip=0', {
          params: { nome: inputValue },
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
        setOptions(mapData(data.dados))
      } catch (error) {
        console.log(error)
      } finally {
        // setLoading(false)
      }
    }
    getOptions()
    return () => cancel()
  }, [inputValue])

  const mapData = (data) => {
    if (!data) return []

    const specialty = {
      options: data.map((spec) =>
        ItemSpecialty(
          spec.idPaciente,
          spec.nome,
          'Especialidade',
          firstLetterCapitalize(spec.nome, 50)
        )
      ),
    }
    // const doctor = {
    //   options: data.map((spec) =>
    //     ItemDoctor(
    //       spec.idPaciente,
    //       spec.nome,
    //       'Médico',
    //         firstLetterCapitalize(spec.nome, 50)
    //     )
    //   ),
    // }
    // const clinic = {
    //   options: data.map((spec) =>
    //     ItemClinic(
    //       spec.idPaciente,
    //       spec.nome,
    //       'Clínica',
    //         firstLetterCapitalize(spec.nome, 50)
    //     )
    //   ),
    // }

    return [ specialty]

  }
}
