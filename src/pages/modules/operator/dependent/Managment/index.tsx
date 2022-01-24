import React, { useEffect } from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'

const Managment: React.FC = () => {
  
  useEffect(() => {
    document.title = 'Rita Saúde | Informações da Clínica'
  }, [])

  return <DefaultLayout title="Dependentes"></DefaultLayout>
}

export default Managment
