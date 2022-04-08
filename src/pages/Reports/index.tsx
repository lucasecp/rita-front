import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { Select } from '@/components/Form/Select'

import { Container, Content } from './styles'
import ButtonPrimary from '@/components/Button/Primary'
import { reportOptions } from './constants/reportOptions'
import { useAuth } from '@/hooks/login'

export const Reports: React.FC = () => {
  const history = useHistory()
  const { user } = useAuth()

  const [allowedReports, setAllowedReports] = useState(reportOptions)

  const [reportChoosen, setReportChoosen] = useState('')

  useEffect(() => {
    const allowedReportsTemporary = reportOptions.filter((report) =>
      user?.permissoes.some(
        (permission: string) => report.permission === permission,
      ),
    )

    setAllowedReports(allowedReportsTemporary)
  }, [])

  const onUserConfirmReportChoice = () => {
    const report = reportOptions.find(
      (report) => report.value === reportChoosen,
    )

    if (!report?.path) {
      return
    }

    history.push(report.path)
  }

  useEffect(() => {
    document.title = 'Rita Saúde | Relatórios'
  }, [])

  return (
    <DefaultLayout title="Relatórios">
      <Container>
        <h2>Selecione o tipo de relatório que deseja gerar:</h2>
        <Content>
          <Select
            value={reportChoosen}
            setValue={setReportChoosen}
            options={allowedReports}
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
