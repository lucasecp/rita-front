import React, { useEffect } from 'react'
import { Services } from './containers/Services'
import { LogoPage } from './containers/LogoPage'

export const Initial = () => {
  const getUserFromStorage = () => JSON.parse(localStorage.getItem('user'))

  const hasPatientProfile = getUserFromStorage().perfis.includes('Paciente')

  useEffect(() => {
    document.title = 'Rita Saúde | Início'
  }, [])

  return hasPatientProfile ? <Services /> : <LogoPage />
}
