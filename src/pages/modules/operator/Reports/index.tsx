import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { Select } from '@/components/Form/Select'

import { Container, Content } from './styles'
import ButtonPrimary from '@/components/Button/Primary'
import { reportOptions } from './constants/reportOptions'

export const Reports: React.FC = () => {
  const history = useHistory()
  const [reportChoosen, setReportChoosen] = useState('')

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
