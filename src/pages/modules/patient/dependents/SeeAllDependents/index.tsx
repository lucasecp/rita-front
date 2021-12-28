import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useState } from 'react'
import { Content, Container } from './styles'
import Table from './Table'
import ButtonHeader from './components/ButtonHeader'

const SeeAllDependents = () => {
  const [dependents, setDependents] = useState({})
  const [order, setOrder] = useState({})

  return (
    <Container>
      <DefaultLayout title="Dependentes" headerChildren={<ButtonHeader />}>
        <Content>
          <Table dependents={dependents} order={order} setOrder={setOrder} />
        </Content>
      </DefaultLayout>
    </Container>
  )
}

export default SeeAllDependents
