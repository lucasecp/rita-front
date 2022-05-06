import React, { useEffect, useState } from 'react'
import { Layout } from './components/Layout'
import { Content } from './styles'
import { profileData } from './profileData'
import Card from './components/Card'
import { useAuth } from '@/hooks/login'

const ChooseProfile: React.FC = () => {
  const { user } = useAuth()

  const [allowedProfiles, setAllowedProfiles] = useState([])

  useEffect(() => {
    const allowedProfilesResults = profileData.filter((prof) =>
      true,
    )

    setAllowedProfiles(allowedProfilesResults)
  }, [])

  return (
    <Layout title="Ínicio">
      <Content>
        {allowedProfiles.map((profile) => (
          <Card key={profile.title} infoUser={profile} />
        ))}
      </Content>
    </Layout>
  )
}

export default ChooseProfile
