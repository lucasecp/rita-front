import React from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
/** Components */
import Header from './Header'
import Form from './Form'
/** Context */
import { ClinicEditContextProvider } from './Context/ClinicEditContext'

const ClinicProfile: React.FC = () => {
  const title = 'Perfil Clínica'
  document.title = title

  return (
    <DefaultLayout title={title}>
      <ClinicEditContextProvider>
        <Header />
        <Form />
      </ClinicEditContextProvider>
    </DefaultLayout>
  )
}

export default ClinicProfile
