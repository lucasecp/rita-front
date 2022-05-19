import React from 'react'
import { RegisterLayout } from './components/RegisterLayout'
import { StepProgressBar } from './components/StepProgressBar'
import { RegisterClinicProvider } from './hooks'
import Address from './steps/Address'
import AdministrativeManager from './steps/Admin/AdministrativeManager'
import BasicInformation from './steps/BasicInformation'
import TechnicalManager from './steps/Admin/TechnicalManager'
import { Content } from './styles'

const RegisterClinic: React.FC = () => {
  return (
    <RegisterLayout>
      <RegisterClinicProvider>
        <Content>
          <StepProgressBar />
          <h1>Clínica - Cadastro</h1>
          <BasicInformation />
          <Address />
          <TechnicalManager />
          <AdministrativeManager />
        </Content>
      </RegisterClinicProvider>
    </RegisterLayout>
  )
}

export default RegisterClinic
