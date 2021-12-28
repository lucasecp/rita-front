import React, { useEffect, useState } from 'react'
import { DefaultLayout } from '../../components/Layout/DefaultLayout'
import { TemplateBox } from './style'
import Cards from './Cards'
import { getUserStorage } from '@/storage/user'
import NotPatientInitialPage from './NotPatientInitialPage'

const MasterPage = () => {
  const [checkPatientPerfil, setCheckPatientPerfil] = useState(false)

  useEffect(() => {
    document.title = 'Rita Saúde | Início'
  }, [])

  console.log(getUserStorage())

  useEffect(() => {
    setCheckPatientPerfil(getUserStorage().perfis.includes('Paciente'))
  }, [])

  return checkPatientPerfil ? (
    <DefaultLayout>
      <TemplateBox>
        <Cards />
      </TemplateBox>
    </DefaultLayout>
  ) : (
    <DefaultLayout title={'Página Inicial'}>
      <TemplateBox>
        <NotPatientInitialPage />
      </TemplateBox>
    </DefaultLayout>
  )
}

export default MasterPage
