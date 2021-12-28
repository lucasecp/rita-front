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

  return (
    <DefaultLayout title={'Página Inicial'}>
      <TemplateBox>
        { checkPatientPerfil ? <Cards /> : <NotPatientInitialPage /> }
      </TemplateBox>
    </DefaultLayout>
  )
}

export default MasterPage
