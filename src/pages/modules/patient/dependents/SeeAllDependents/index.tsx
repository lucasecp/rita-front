import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useState, useEffect } from 'react'
import { Content, Container } from './styles'
import Table from './Table'
import ButtonHeader from './components/ButtonHeader'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import { queryOrderString } from '@/helpers/queryString/order'
import { fromApi } from './adapters'
import { DependentsI } from './types'

const SeeAllDependents = () => {
  const [dependents, setDependents] = useState<DependentsI[]>([])
  const [order, setOrder] = useState({})
  const { Loading } = useLoading()

  useEffect(() => {
    document.title = 'Rita Saúde | Depedentes'

    const getDependents = async () => {
      const ordertoApi = Object.keys(order).length
        ? order
        : {
            name: 'nome',
            value: 'ASC',
          }
      try {
        Loading.turnOn()
        const { data } = await apiPatient(
          `paciente/meu-perfil?${queryOrderString(ordertoApi)}`,
        )
        setDependents(fromApi(data.dependentes))
      } catch ({ response }) {
      } finally {
        Loading.turnOff()
      }
    }
    getDependents()
  }, [order])

  console.log(order)

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
