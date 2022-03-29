import React, { useEffect, useState } from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { IncludeButton } from './components/IncludeButton'
import { Container } from './styles'
import { ProfilesTable } from './components/ProfilesTable'
import { useLoading } from '@/hooks/useLoading'
import apiUser from '@/services/apiUser'
import Header from './components/Header'
import { profilesFromApi } from './adapters/fromApi'

export const SeeAllProfiles: React.FC = () => {
  useEffect(() => {
    document.title = 'Rita Saúde | Perfis - Visualização'
  }, [])

  const { Loading } = useLoading()

  const [profiles, setProfiles] = useState([])

  const loadProfiles = async () => {
    Loading.turnOn()

    try {
      const { data } = await apiUser.get('/perfil')

      const profilesMapped = profilesFromApi(data)

      setProfiles(profilesMapped)
    } catch (error) {
      // console.log(error)
      // toast.error('')
    } finally {
      Loading.turnOff()
    }
  }

  useEffect(() => {
    Loading.turnOn()

    loadProfiles()
  }, [])

  return (
    <DefaultLayout title="Perfis" headerChildren={<IncludeButton />}>
      <Container>
        <Header />
        {/* <ProfilesTable profiles={profiles} loadProfiles={loadProfiles} /> */}
        <ProfilesTable profiles={profiles} />
      </Container>
    </DefaultLayout>
  )
}
