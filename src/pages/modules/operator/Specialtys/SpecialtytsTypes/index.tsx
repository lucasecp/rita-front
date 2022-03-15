import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import Table from './Table'
import { Container, Content } from './styles'

import Pagination from '@/components/Pagination'
import { useLoading } from '@/hooks/useLoading'
import apiAdmin from '@/services/apiAdmin'
import { queryFilterString } from '@/helpers/queryString/filter'
import { queryOrderString } from '@/helpers/queryString/order'
import { fromApi } from './adapters'
import { SpecialtyI } from './types'
import ButtonHeader from './Components/ButtonHeader'

const SpecialtysTypes: React.FC = () => {
  const [filters, setFilters] = useState<any[]>([])
  const [order, setOrder] = useState({})
  const [specialtys, setSpecialtys] = useState({} as SpecialtyI)
  const { Loading } = useLoading()

  useEffect(() => {
  document.title = 'Rita Saúde | Tipos de Especialidades'
  },[])

  useEffect(() => {
    const getSpecialtys = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiAdmin(
          `/tipo-especialidade?${
            queryFilterString(filters) + queryOrderString(order)
          }`,
        )
        setSpecialtys({
          total: data.total,
          data: fromApi(data.tiposEspecialidade),
        })
      } catch (error) {
      } finally {
        Loading.turnOff()
      }
    }
    getSpecialtys()
  }, [filters, order])

  return (
    <Container>
      <DefaultLayout
        title="Gestão de Tipo de Especialidade"
        headerChildren={<ButtonHeader />}
      >
        <Content>
          <Filter setFilters={setFilters} />
          <Table 
            specialtys={specialtys}
            setSpecialtys={setSpecialtys}
            setOrder={setOrder}
            order={order}
          />
        </Content>
      </DefaultLayout>
    </Container>
  )
}

export default SpecialtysTypes
