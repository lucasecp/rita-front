import RegisterLayout from '@/components/Layout/RegisterLayout'
import React, { useState } from 'react'
import Adress from './steps/Address'
import RegistrationData from './steps/RegistrationData'
import Document from './steps/Document'
import Dependents from './steps/Dependents'
import { Content, DotSteps, BtnGroup, BtnNext, BtnPrev } from './style'
import ButtonPrimary from '@/components/Button/Primary'

const RegisterPatient = () => {
  const [step, setStep] = useState(2)
  const [data, setData] = useState({})
  const [images, setImages] = useState('')
  const [disableBtn, setBtn] = useState(false)
  const handleClick = () => {
    setStep(step + 1)
  }
  return (
    <RegisterLayout>
      <Content>
        <header>
          <DotSteps active={step === 1} finish={step >= 2} />
          <DotSteps
            active={step === 2}
            finish={step >= 3}
            waiting={step < 2}
          />
          <DotSteps
            active={step === 3}
            finish={step >= 4}
            waiting={step < 3}
          />
          <DotSteps active={step === 4} waiting={step < 4} />
        </header>
        {step === 1 && <RegistrationData setData={setData} setBtn={setBtn} />}
        {step === 2 && <Adress setData={setData} setBtn={setBtn} />}
        {step === 3 && <Document setImages={setImages} setBtn={setBtn} />}
        {step === 4 && <Dependents setData={setData} setBtn={setBtn} />}
        <BtnGroup>
          {step > 1 && (
            <BtnPrev onClick={() => setStep(step - 1)}>Etapa Anterior</BtnPrev>
          )}
          <BtnNext disabled={!disableBtn} onClick={handleClick}>
            Próxima Etapa
          </BtnNext>
        </BtnGroup>
      </Content>
    </RegisterLayout>
  )
}

export default RegisterPatient
