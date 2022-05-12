import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { useLoading } from '@/hooks/useLoading'
import apiAdmin from '@/services/apiAdmin'
import { AxiosError } from 'axios'
import React, { useEffect, useState } from 'react'

import { fromApi } from './adapters'
import { specialysDocsFromApi } from './adapters/mapSpecialysDocs'
import Form from './Form'
import Header from './Header'
import { Content } from './styles'
import { DataSpecialistI, SpecialtysAndDocsType } from './Types'

const SpecialistProfile: React.FC = () => {
  const [data, setData] = useState<DataSpecialistI>({} as DataSpecialistI)
  const [specialtysDocs, setSpecialtysDocs] = useState<SpecialtysAndDocsType>(
    {} as SpecialtysAndDocsType,
  )
  const [photo, setPhoto] = useState<File>()
  const [makeNewRequest, setMakeNewRequest] = useState(0)
  const { Loading } = useLoading()

  useEffect(() => {
    const getSpecialtysDocs = async (dataMapped: DataSpecialistI) => {
      let specialistResult = []
      for(let index=0; index < dataMapped.specialtys.length;){
        const spec = dataMapped.specialtys[index]
        try {
          Loading.turnOn()

          const result = await apiAdmin.get(
            `/medico/documento/visualizar?cpf=${dataMapped.specialistInfo.cpf}&tipoDocumento=ComprovanteEspecialidade&idEspecialidade=${spec.id}`,
            { responseType: 'arraybuffer' })

          if(result){
            specialistResult.push(result)
            if (dataMapped.specialtys.length === (index + 1)) {
              setSpecialtysDocs(specialysDocsFromApi(specialistResult, dataMapped.specialtys))
            }
            index++
          }

        } catch (error) {
          const { response } = error as AxiosError
          if (response.status === 404) {
            specialistResult = []
            let idEspecialidade = spec.id
            dataMapped.specialtys = dataMapped.specialtys.filter(item => item.id !== idEspecialidade)
            getSpecialtysDocs(dataMapped)
          }
        } finally {}
      }
      Loading.turnOff()
    }


    // const getSpecialtysDocs = async (dataMapped: DataSpecialistI) => {
    //   let specialistResult = []
    //    dataMapped.specialtys.map((spec, index) => {
    //       apiAdmin.get(
    //         `/medico/documento/visualizar?cpf=${dataMapped.specialistInfo.cpf}&tipoDocumento=ComprovanteEspecialidade&idEspecialidade=${spec.id}`,
    //         { responseType: 'arraybuffer' }).then(result => {
    //           specialistResult.push(result)
    //           console.log({result})
    //           if(dataMapped.specialtys.length === (index + 1)){
    //             console.log(specialistResult)
    //             console.log({dataMapped: dataMapped.specialtys.length, index: (index + 1) })
    //             const resultFromApi = specialysDocsFromApi(specialistResult, dataMapped.specialtys)
    //             //console.log(specialistResult, 'specialysDocsFromApi', resultFromApi)
    //             setSpecialtysDocs(resultFromApi)
    //           }
    //         }).catch (error => {
    //           const { response } = error as AxiosError
    //           if(response.status === 404){
    //             specialistResult = []
    //             let idEspecialidade = spec.id
    //             dataMapped.specialtys = dataMapped.specialtys.filter(item => item.id !== idEspecialidade)
    //             //console.log({response, dataMapped: dataMapped.specialtys})
    //             getSpecialtysDocs(dataMapped)
    //           }
    //         })
    //       })
    // }


    const getDoctor = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiAdmin.get('/medico/meu-perfil')
        const dataMapped = fromApi(data)

        if (dataMapped.specialtys.length) {
          await getSpecialtysDocs(dataMapped)
        }

        setData(dataMapped)
      } catch (error) {
        console.log(error)
      } finally {
        Loading.turnOff()
      }
    }
    getDoctor()
  }, [makeNewRequest])

  return (
    <DefaultLayout title="Perfil - Visualizar">
      <Content>
        <Header data={data} setPhoto={setPhoto} />
        <Form
          data={data}
          profilePhoto={photo}
          setMakeNewRequest={setMakeNewRequest}
          specialtysDocs={specialtysDocs}
        />
      </Content>
    </DefaultLayout>
  )
}

export default SpecialistProfile
