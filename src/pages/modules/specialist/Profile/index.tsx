import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { useLoading } from '@/hooks/useLoading'
import apiAdmin from '@/services/apiAdmin'
import React, { useEffect, useState } from 'react'

import { fromApi } from './adapters'
import Form from './Form'
import Header from './Header'
import { Content } from './styles'
import { DataSpecialistI } from './Types'

const SpecialistProfile: React.FC = () => {
  const [data, setData] = useState<DataSpecialistI>({})
  const [photo, setPhoto] = useState<File>()
  const { Loading } = useLoading()

  useEffect(() => {
    const getDoctor = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiAdmin.get('/medico/meu-perfil')
        setData(fromApi(data))
      } catch (error) {
      } finally {
        Loading.turnOff()
      }
    }
    getDoctor()
  }, [])

  return (
    <DefaultLayout title="Perfil - Visualizar">
      <Content>
        <Header data={data} setValue={setPhoto} />
        <Form data={data} profilePhoto={photo} />
      </Content>
    </DefaultLayout>
  )
}

export default SpecialistProfile
