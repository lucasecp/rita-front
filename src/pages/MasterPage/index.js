import React, { useEffect } from 'react'
import { DefaultLayout } from '../../components/Layout/DefaultLayout'
import { TemplateBox } from './style'
import Cards from './Cards'

const MasterPage = () => {
  useEffect(() => {
    document.title = 'Como você precisa cuidar sua saúde hoje?'
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
