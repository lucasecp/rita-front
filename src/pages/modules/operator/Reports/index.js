import {DefaultLayout} from '@/components/Layout/DefaultLayout'
import Select from '@/components/Form/Select'
import React, { useState } from 'react'

import { Container, Content } from './styles'
import ButtonPrimary from '@/components/Button/Primary'
import { useAuth } from '@/hooks/login'
import { getOptionsPermission, getPath } from './helpers/getPermissions'
import { useHistory } from 'react-router'

const Reports = () => {
  const { user } = useAuth()
  const history = useHistory()
  const [reportChoosen, setReportChoosen] = useState('')

  const onUserConfirmReportChoice = () => {
    const path = getPath(reportChoosen)
    if (path) {
      history.push(path)
    }
  }

  return (
    <DefaultLayout title="Relatórios">
      <Container>
        <h2>Selecione o tipo de relatório que deseja gerar:</h2>
        <Content>
          <Select
            value={reportChoosen}
            setValue={setReportChoosen}
            options={getOptionsPermission(user?.permissoes)}
            labelDefaultOption="Selecione"
          />
          <ButtonPrimary onClick={onUserConfirmReportChoice}>Selecionar</ButtonPrimary>
        </Content>
      </Container>
    </DefaultLayout>
  )
}

export default Reports
