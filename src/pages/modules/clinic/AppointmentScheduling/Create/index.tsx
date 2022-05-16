import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useEffect } from 'react'
import Form from './Form'

const Create: React.FC = () => {
  useEffect(() => {
    document.title = 'Rita Saúde | Criar Agendamento'
  }, [])

  return (
    <DefaultLayout title="Criar Agendamento">
      <Form />
    </DefaultLayout>
  )
}

export default Create
