import React from 'react'
import { RegisterClinicProvider } from './hooks'
import { RegisterLayout } from './components/RegisterLayout'
import { StepProgressBar } from './components/StepProgressBar'
import BasicInformation from './steps/BasicInformation'
import Address from './steps/Address'
import Photo from './components/Photo/index'

import { Content } from './styles'

const RegisterClinic: React.FC = () => {
  return (
    <RegisterLayout>
      <RegisterClinicProvider>
        <Content>
          <StepProgressBar />
          <h1>Clinica - Cadastre-se</h1>
          <BasicInformation />
          <Address />
        </Content>
      </RegisterClinicProvider>
    </RegisterLayout>
  )
}

export default RegisterClinic
