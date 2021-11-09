import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import Select from '@/components/Form/Select'

import { Container, Content } from './styles'
import ButtonPrimary from '@/components/Button/Primary'
import { useAuth } from '@/hooks/login'
import { getOptionsPermission, getPath } from './helpers/getPermissions'
import { reportOptions } from './constants/OptionsPermission'

const Reports = () => {
  const { user } = useAuth()
  const history = useHistory()
  const [reportChoosen, setReportChoosen] = useState('')

  const onUserConfirmReportChoice = () => {
    // const path = getPath(reportChoosen)
    // if (path) {
    const { path: reportPath } = reportOptions.find(
      (report) => report.value === reportChoosen
    )
    history.push(reportPath)
    // }
  }

  return (
    <DefaultLayout title="Relatórios">
      <Container>
        <h2>Selecione o tipo de relatório que deseja gerar:</h2>
        <Content>
          <Select
            value={reportChoosen}
            setValue={setReportChoosen}
            // options={getOptionsPermission(user?.permissoes)}
            options={reportOptions}
            labelDefaultOption="Selecione"
          />
          <ButtonPrimary onClick={onUserConfirmReportChoice}>
            Selecionar
          </ButtonPrimary>
        </Content>
      </Container>
    </DefaultLayout>
  )
}

export default Reports
