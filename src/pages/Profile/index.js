import React, { useEffect } from 'react'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import { TemplateBox } from './style'
import FormInputs from './FormInputs'
import Boxes from './Boxes'
import Cards from './Cards'

const Profile = () => {
  useEffect(() => {
    document.title = 'Perfil'
  }, [])

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

export default Profile
