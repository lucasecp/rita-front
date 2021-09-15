import RegisterLayout from '@/components/Layout/RegisterLayout'
import React, { useEffect, useState } from 'react'
import Adress from './steps/Address'
import RegistrationData from './steps/RegistrationData'
import Document from './steps/Document'
import Dependents from './steps/Dependents'
import { Content, DotSteps, BtnGroup, BtnNext, BtnPrev } from './style'
import ButtonPrimary from '@/components/Button/Primary'
import { useHistory, useLocation } from 'react-router'
const DATAFAKE = {
idPaciente: 1,
nome: "ubirajara soares",
cpf: "31624278191",
sexo: "M",
dataNascimento: "1990-01-02T00:00:00.000Z",
endereco: {
  cep: "70.123-456",
  logradouro: "Rua 18 Norte",
  numero: "901",
  complemento: "apartamento",
  bairro: "Aguas Claras",
  cidade: "Brasilia",
  uf: "DF"
  },
telefone: "61981538247",
email: "ubirajara.melo@gmail.com",
dependentes: []
}

const RegisterPatient = () => {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({})
  const [dataApi, setDataApi] = useState({})
  const [images, setImages] = useState('')
  const [disableBtn, setBtn] = useState(false)

  const location = useLocation()
  // useEffect(() => {
  //   const data = location.state
  //   if(!data) return setDataApi({})
  //   setDataApi(data.userData)
  // },[])
  // TESTE
  useEffect(() => {
    setDataApi(DATAFAKE)
  },[])
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
        {step === 1 && <RegistrationData setData={setData} setBtn={setBtn} dataApi={dataApi} />}
        {step === 2 && <Adress setData={setData} setBtn={setBtn} dataApi={dataApi} />}
        {step === 3 && <Document setImages={setImages} setBtn={setBtn} dataApi={dataApi} />}
        {step === 4 && <Dependents setData={setData} setBtn={setBtn} dataApi={dataApi} />}
        <BtnGroup>
          {step > 1 && (
            <BtnPrev onClick={() => setStep(step - 1)}>Etapa Anterior</BtnPrev>
          )}
          <BtnNext disabled={!disableBtn} onClick={handleClick}>
            {step === 4 ? 'Concluir cadastro' : 'Próxima Etapa'}
          </BtnNext>
        </BtnGroup>
      </Content>
    </RegisterLayout>
  )
}

export default RegisterPatient
