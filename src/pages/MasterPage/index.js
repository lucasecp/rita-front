import React, { useEffect } from 'react'
import { DefaultLayout } from '../../components/Layout/DefaultLayout'
import { TemplateBox } from './style'
import Cards from './Cards'

const MasterPage = () => {
  useEffect(() => {
    document.title = 'Rita Saúde | Início'
  }, [])

  return (
    <DefaultLayout>
      <TemplateBox>
        <Cards />
      </TemplateBox>
    </DefaultLayout>
  )
}

export default MasterPage
