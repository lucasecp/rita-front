import React from 'react'
import { RegisterSpecialistProvider, useRegisterSpecialist } from './hooks'
import { RegisterLayout } from './components/RegisterLayout'
import { StepProgressBar } from './components/StepProgressBar'
import BasicInformation from './steps/BasicInformation'
import ProfissionalInformation from './steps/ProfissionalInformation'
import Photo from './components/Photo/index'

import { Content } from './styles'
import RegisterSpecialtys from './steps/RegisterSpecialtys'

const RegisterSpecialist: React.FC = () => {
  return (
    <RegisterLayout>
      <RegisterSpecialistProvider>
        <Content>    
          <StepProgressBar />
          <h1>Especialista - Cadastre-se</h1>
          <Photo />

          <BasicInformation />
          <ProfissionalInformation />
          <RegisterSpecialtys />
        </Content>
      </RegisterSpecialistProvider>
    </RegisterLayout>
  )
}

export default RegisterSpecialist
