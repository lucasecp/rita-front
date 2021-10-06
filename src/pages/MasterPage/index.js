import React, { useEffect } from 'react'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import { TemplateBox } from './style'
import FormInputs from './FormInputs'
import Boxes from './Boxes'
import Cards from './Cards'
import { useAuth } from '@/context/login'

const MasterPage = () => {
  const {userPermission} = useAuth()
  useEffect(() => {
    document.title = 'Perfil'
  }, [userPermission])

  return (
    <DefaultLayout>
      <TemplateBox>
        <Cards />
        <FormInputs />
      </TemplateBox>
      <Boxes />
    </DefaultLayout>
  )
}

export default MasterPage
