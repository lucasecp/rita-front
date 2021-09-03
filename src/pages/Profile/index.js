import React, { useEffect } from 'react'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import { Card, Box, TemplateBox } from './style'
import OutlineButton from '../../components/Button/Outline'
import ButtonPrimary from '../../components/Button/Primary'
import InputText from '../../components/Form/InputText'
import { Col, Row } from 'react-bootstrap'
import FormInputs from './FormInputs'
import Background1 from '../../assets/img/element1.svg'
import Background2 from '../../assets/img/element2.svg'
import Background3 from '../../assets/img/element3.svg'
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
