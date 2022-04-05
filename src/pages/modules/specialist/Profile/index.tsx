import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { useLoading } from '@/hooks/useLoading'
import apiAdmin from '@/services/apiAdmin'
import axios from 'axios'
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
  const [makeNewRequest, setMakeNewRequest] = useState(false)
  const { Loading } = useLoading()

  useEffect(() => {
    const getSpecialtysDocs = async (dataMapped: DataSpecialistI) => {
      try {
        const response = await axios.all(
          dataMapped.specialtys.map((spec) =>
            apiAdmin.get(
              `/medico/documento/visualizar?cpf=${dataMapped.specialistInfo.cpf}&tipoDocumento=ComprovanteEspecialidade&idEspecialidade=${spec.id}`,
              { responseType: 'arraybuffer' },
            ),
          ),
        )
        console.log(response)
        setSpecialtysDocs(specialysDocsFromApi(response, dataMapped.specialtys))
      } catch (error) {
        console.log(error)
      }
    }

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
        <Header data={data} setValue={setPhoto} />
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
