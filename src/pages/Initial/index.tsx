import React, { useEffect } from 'react'
import { Services } from './containers/Services'
import { LogoPage } from './containers/LogoPage'
import { useAuth } from '@/hooks/login'
import { profiles } from '@/constants/profiles'

export const Initial: React.FC = () => {
  const { user } = useAuth()

  useEffect(() => {
    document.title = 'Rita Saúde | Início'
  }, [])

  return user.profileChosen === profiles.Paciente ? <Services /> : <LogoPage />
}
