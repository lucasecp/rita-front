import RegisterLayout from '@/components/Layout/RegisterLayout'
import React, { useState } from 'react'
import Adress from './steps/Adress'
import RegistrationData from './steps/RegistrationData'
import Document from './steps/Document'
import Dependents from './steps/Dependents'
import { Content } from './style'
import ButtonPrimary from '@/components/Button/Primary'

const RegisterPatient = () => {
  const [step, setStep] = useState(1)
  const [data, setData] = useState('');
  const [images, setImages] = useState('');
  const [disableBtn, setBtn] = useState(false);

  return (
    <RegisterLayout>
      <Content>
        <header></header>
        {step === 1 && <RegistrationData setData={setData}  setStep={setStep} />}
        {step === 2 && <Adress setData={setData} setStep={setStep}/>}
        {step === 3 && <Document setImages={setImages} setStep={setStep}/>}
        {step === 4 && <Dependents setData={setData} setStep={setStep}/>}
       {step > 1 && <button>Etapa Anterior</button>}
      </Content>
    </RegisterLayout>
  )
}

export default RegisterPatient
