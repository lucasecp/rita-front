export default () => {
  return {}
}
// import axios from 'axios'
// import { useEffect } from 'react'
// // import { staticAutocomplete } from './static'

// // import ItemDoctor from './iItemDoctor'
// // import ItemClinic from './iItemClinic'
// import ItemSpecialty from './itemSpecialty'
// import apiPatient from '@/services/apiPatient'
// import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'

// export default (inputValue, setOptions) => {
//   useEffect(() => {
//     let cancel
//     // const dataMapped = mapData(staticAutocomplete)

//     const getOptions = async () => {
//       try {
//         const { data } = await apiPatient.get('/paciente/busca-clinicas', {
//           params: { nome: inputValue },
//           cancelToken: new axios.CancelToken((c) => (cancel = c)),
//         })
//         setOptions(mapData(data.dados))
//       } catch (error) {
//         console.log(error)
//       } finally {
//       }
//     }
//     getOptions()
//     return () => cancel()
//   }, [inputValue])


// }

