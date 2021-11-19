import ButtonPrimary from '@/components/Button/Primary'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useState } from 'react'
import Filter from './Filter'
import Table from './Table'
import { Container, Content } from './styles'
import ButtonHeader from './Components/ButtonHeader'

const PlanManagment = () => {
  return (
    <Container>
      <DefaultLayout
        title="Gestão de Planos"
        headerChildren={<ButtonHeader/>}
      >
        <Content>
          <Filter />
          <Table/>
        </Content>
      </DefaultLayout>
    </Container>
  )
}

export default PlanManagment
