import React, { useEffect } from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import Header from './Header'
import { Content } from './styles'
import Form from './Form'
import { useLocation, useHistory } from 'react-router-dom'
import { OPERATOR_DEPENDENT_MANAGMENT } from '@/routes/constants/namedRoutes/routes'

const AddDependent: React.FC = () => {
  const location = useLocation()
  const history = useHistory()
  const holder = location.state?.holder

  useEffect(() => {
    if (!holder) {
      history.push(OPERATOR_DEPENDENT_MANAGMENT)
    }
  }, [])

  useEffect(() => {
    document.title = 'Rita Saúde | Informações da Clínica'
  }, [])

  return (
    <DefaultLayout title="Dependentes - Adicionar Dependentes">
      <Content>
        <Header holder={holder} />
        <Form holder={holder} />
      </Content>
    </DefaultLayout>
  )
}

export default AddDependent
