import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useState, useEffect } from 'react'
import { Content, Container } from './styles'
import Table from './Table'
import { AddDependentButton } from './components/AddDependentButton'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import { queryOrderString } from '@/helpers/queryString/order'
import { fromApi } from './adapters'
import { DependentsI } from './types'

export const SeeAllDependents: React.FC = () => {
  const [dependents, setDependents] = useState<DependentsI[]>([])
  const [order, setOrder] = useState({})
  const { Loading } = useLoading()

  useEffect(() => {
    document.title = 'Rita Saúde | Dependentes'

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

  return (
    <Container>
      <DefaultLayout
        title="Dependentes"
        headerChildren={
          <AddDependentButton currentDependent={dependents.length} />
        }
      >
        <Content>
          <Table dependents={dependents} order={order} setOrder={setOrder} />
        </Content>
      </DefaultLayout>
    </Container>
  )
}
